import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import Navbar from "@/components/Navbar";
import "@/assets/styles/Register.css";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    fetch('http://localhost:3000/auth/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        name: name,
        password: password,
        usertype: "user",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Registration Failed');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert("Registered successfully, please proceed to login page");
        router.push('/welcome_back');
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setName("");
      })
      .catch((error) => {
        alert(error.message || "An error occurred");
        console.error(error);
      });    
  };

  return (
    <View id="main-container" style={{ padding: 0, margin: 0 }}>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Navbar />
      </View>
      <View id="container">
        <Text id="register-text">REGISTER</Text>
        <Text id="subheading">Create your new Account</Text>
        <View
          style={{
            display: "flex",
            gap: 10,
            marginTop: 10,
          }}
        >
          <View id="input-container">
            <TextInput placeholder="Name" value={name} onChangeText={setName} />
          </View>

          <View id="input-container">
            <TextInput
              placeholder="KIIT Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View id="input-container">
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View id="input-container">
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
        </View>
        <View>
          <Pressable id="signup-button" onPress={handleSignup}>
            <Text id="signup-button-text">SIGNUP</Text>
          </Pressable>

          <Pressable
            id="nav-label"
            onPress={() => router.push("/welcome_back")}
          >
            <Text>Already have an account?</Text>
            <Text id="login-text">Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
