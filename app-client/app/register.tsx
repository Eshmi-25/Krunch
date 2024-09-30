import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import Navbar from '@/components/Navbar';
import "@/assets/styles/Register.css";

export default function Register() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registered successfully");
  };


  return (
    <View id='main-container' style={{ padding: 0, margin: 0 }}>
      <View style={{
      display: "flex",
      justifyContent: "flex-start",
    }}>
        <Navbar/>
        </View>
    <View id="container">
      <Text id="register-text">REGISTER</Text>
      <Text id="subheading">Create your new Account</Text>
      <View style={{
        display: 'flex',
        gap: 10,
        marginTop: 10
      }}>
      <View id="input-container">
        <TextInput 
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
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
      <Pressable 
        id="signup-button"
        onPress={handleSignup}
      >
        <Text id="signup-button-text">SIGNUP</Text>
      </Pressable>

      <Pressable id='nav-label' onPress={() => router.push('/welcome_back')}>
        <Text>Already have an account?</Text>
        <Text id="login-text">Login</Text>
      </Pressable>
      </View>
      </View>
      </View>
  );
}