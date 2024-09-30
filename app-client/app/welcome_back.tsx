import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      
      <Image 
        source={require('@/assets/images/kiit-logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>KRUNCH</Text>
      <Text style={styles.welcomeText}>WELCOME BACK</Text>
      <Text style={styles.subheading}>Login to your account</Text>
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

     
      <TouchableOpacity onPress={() => router.push('/')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Temporary link to the food court page*/}
      <TouchableOpacity onPress={() => router.push('/food_courts')} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

    
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.registerText}>Don't have an account? <Text style={styles.registerLink}>Register</Text></Text>
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
    marginTop: '-40%',
    marginLeft: '-65%',
    marginBottom: '30%',

  },
  title: {
    fontFamily: "Bebas",
    color: "#1BCF5A",
    fontSize: 50,
    marginTop: '-50%',
    marginLeft: '5%',
    marginBottom: '60%',
  },
  welcomeText: {
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
    backgroundColor: '#E6F2ED',
    
    borderRadius: 10,
    width: '100%',
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
    
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#003400',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#1BCF5A',
    borderRadius: 10,
    width: '100%',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 18,
    color: 'white',
  },
  registerText: {
    fontSize: 14,
    color: '#003400',
    marginTop: 20,
  },
  registerLink: {
    textDecorationLine: 'underline',
  },
});
