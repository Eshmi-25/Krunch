import React from "react";
import { useState } from "react";
import ilovekiit from "../assets/ilovekiit.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const LandingPage = () => {
  const [loginType, setLoginType] = useState("");
  const [fcChecked, setFCChecked] = useState(false);
  const [adminChecked, setAdminChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = new useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/auth/login", {
      email: email,
      password: password, 
    }).then((res) => {
      const decodedToken = jwtDecode(res.data.token);
      if(decodedToken.usertype === "admin") {
        localStorage.setItem("token", res.data.token);
        nav("/viewFoodCourts");
      } else if(decodedToken.usertype === "foodcourt") {
        localStorage.setItem("token", res.data.token);
        nav("/viewOrders");
      }
      else {
        alert("Invalid credentials");
      }
    }).catch((err) => {
      console.log(err);
    });
  };
  return (
    <div className="overflow-hidden items-center justify-between h-screen w-screen flex md:flex-row flex-col">
      {/* Left Side - Image Section */}
      <div className="w-2/3 h-screen">
        <img
          src={ilovekiit}
          alt="I Love KIIT"
          className=" object-cover h-full w-full"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="p-20 w-1/3 h-screen flex flex-col justify-center bg-primary">
        <h2 className="text-5xl font-thin text-center text-accentgreen mb-4">
          LOGIN
        </h2>
        <p className="text-center text-accentgreen mb-6 text-xl">
          Login to your account
        </p>

        <form>
          <div className="mb-4">
            <div className="flex justify-between px-10 cabin text-xs mb-4">
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  checked={fcChecked}
                  onChange={() => {
                    setLoginType("Food Court");
                    setAdminChecked(false);
                    setFCChecked(true);
                  }}
                />
                <label>Food Court</label>
              </div>
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  checked={adminChecked}
                  onChange={() => {
                    setLoginType("Admin");
                    setFCChecked(false);
                    setAdminChecked(true);
                  }}
                />
                <label>Admin</label>
              </div>
            </div>
            <input
              type="email"
              id="email"
              placeholder="KIIT Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-tertiary text-accentgreen bg-accentwhite cabin"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-accentgreen text-accentwhite font-thin py-2 px-4 rounded-2xl text-xl shadow-md hover:text-tertiary"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
