import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import Navbar from "@/components/Navbar";
import "@/assets/styles/Register.css";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    router.push("/food_courts");
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
        <Text
          id="register-text"
          style={{
            fontSize: 52,
          }}
        >
          WELCOME BACK
        </Text>
        <Text id="subheading">Login to your Account</Text>
        <View
          style={{
            display: "flex",
            gap: 10,
            marginTop: 10,
          }}
        >
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
        </View>
        <View>
          <Pressable id="signup-button" onPress={handleLogin}>
            <Text id="signup-button-text">LOGIN</Text>
          </Pressable>

          <Pressable id="nav-label" onPress={() => router.push("/register")}>
            <Text>Don't have an account?</Text>
            <Text id="login-text">Register</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
