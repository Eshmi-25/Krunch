import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      
      <Image 
        source={require('@/assets/images/kiit-logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>KRUNCH</Text>
      <Text style={styles.registerText}>REGISTER</Text>
      <Text style={styles.subheading}>Create your new Account</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder="KIIT Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

     
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>SIGNUP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/')}>
        <Text style={styles.loginText}>Don't have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B3D4C3',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 50,
    left: 10,
  },
  title: {
    fontFamily: 'Bebas',
    color: '#1BCF5A',
    fontSize: 50,
    position: 'absolute',
    top: 70,
    left: 120,
  },
  registerText: {
    fontFamily: 'Bebas',
    color: '#003400',
    fontSize: 40,
    position: 'absolute',
    top: 200,
  },
  subheading: {
    fontFamily: 'Regular',
    color: '#003400',
    fontSize: 20,
    position: 'absolute',
    top: 250,
  },
  inputContainer: {
    marginTop: 10,
    top: 50,
    backgroundColor: '#E3E9E5',
    borderRadius: 10,
    width: '80%',
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#003400',
  },
  signupButton: {
    backgroundColor: '#1BCF5A',
    paddingVertical: 15,
    width: "80%",
    paddingHorizontal: 40,
    borderRadius: 30,
    position: 'absolute',
    top: 670,
    alignContent: 'center',
    opacity: 2,
  },
  signupButtonText: {
    fontSize: 20,
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  loginText: {
    fontSize: 14,
    color: '#003400',
    bottom: -150,
    textDecorationLine: 'underline',
  },
});
