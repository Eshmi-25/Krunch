const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../database/models/user.model');
const bcrypt = require('bcrypt');

dotenv.config();
const router = express.Router();


router.route('/createUser').post(async (req, res) => {
    try {
        const { password, ...otherDetails } = req.body;
        const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = new User({
            ...otherDetails,
            password: hashedPassword
        });
        await user.save();
        
        res.status(200).send(JSON.stringify({ message: "User created successfully" }));
    } catch (error) {
        console.error(error);
        res.status(400).send(JSON.stringify({ message: "400" }));
    }
});


router.route('/login').post(async (req, res) => {
    try {
        const data = req.body;
        const user = await User.findOne({where: { email: data.email }});
        
        if (!user) {
            return res.status(401).send(JSON.stringify({ message: 'User not found' }));
        }
        const isMatch = await bcrypt.compare(data.password, user.password);
        
        if (!isMatch) {
            return res.status(401).send(JSON.stringify({ message: 'Invalid credentials' }));
        }
        const token = jwt.sign(
            { id: user._id, email: user.email, usertype: user.usertype },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(400).send(JSON.stringify({ message: 'Authentication failed' }));
    }
});

module.exports = router;