import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text, TextInput, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

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
    <View style={styles.container}>
      
      <Image 
        source={require('@/assets/images/kiit-logo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>KRUNCH</Text>
      <Text style={styles.registerText}>REGISTER</Text>
      <Text style={styles.subheading}>Create your new Account</Text>
      <View>
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
      </View>
      <View>
      <TouchableOpacity 
        style={styles.signupButton} 
        onPress={handleSignup}
      >
        <Text style={styles.signupButtonText}>SIGNUP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/welcome_back')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
      </View>
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
    marginTop: '10%',
    marginLeft: '-65%',
  },
  title: {
    fontFamily: "Bebas",
    color: "#1BCF5A",
    fontSize: 50,
    marginTop: '-20%',
    marginLeft: '5%',
  },
  registerText: {
    fontFamily: 'Bebas',
    color: '#003400',
    fontSize: 40,
    marginTop: '20%',
  },
  subheading: {
    fontFamily: 'Regular',
    color: '#003400',
    fontSize: 20,
    marginTop: '2%',
  },
  
  inputContainer: {
    marginTop: 10,
    backgroundColor: '#E3E9E5',
    borderRadius: 10,
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 10,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
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
    paddingHorizontal: 40,
    borderRadius: 30,
    alignContent: 'center',
    marginBottom:'2%',
    marginTop:'2%',
    opacity: 2, 
  },
signupButtonText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Bebas',
    alignContent:'center',
},
  loginText: {
    fontSize: 16,
    color: '#003400',
    textDecorationLine: 'underline',
    marginTop: 20,
  
  },
});
