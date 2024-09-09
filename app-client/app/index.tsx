import React from 'react';
import { Image, TouchableOpacity, View, Text, ImageBackground, StyleSheet } from 'react-native';
import {useRouter} from 'expo-router';

export default function Index() {
  const router = useRouter();

  const handleGetStarted =() =>{
    router.push('/home_page');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#B3D4C3",
      }}
    >
      <ImageBackground 
        source={require('@/assets/images/kiit_phone.png')}
        resizeMode="cover"
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: "center",
          alignItems: "center",
        }} 
      >
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: "black",
            opacity: 0.65,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Image 
            source={require('@/assets/images/kiit-logo.png')}
            style={{
              width: 100,
              height: 100,
              position: 'absolute',
              top: 50,
              left: 10,
            }}
          />
          <Text 
            style={{
              fontFamily: "Bebas",
              color: "#1BCF5A",
              fontSize: 50,
              position: 'absolute',
              top: 70,
              left: 120,
            }}>KRUNCH</Text>

            <Text
            style={{
              fontFamily: "Bebas",
              color: "#fff",
              fontSize: 40,
              position: 'absolute',
              top: 570,
              left: 80,
            }}>WELCOME TO</Text>
            <Text 
            style={{
              fontFamily: "Bebas",
              color: "#1BCF5A",
              fontSize: 50,
              position: 'absolute',
              top: 600,
              left: 80,
            }}>KRUNCH  </Text>

          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>GET STARTED →</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1BCF5A',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    position: 'absolute',
    alignContent: 'center',
    bottom: 70,
    opacity: 2,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: "Bebas",
    color: '#FFFFFF',
    fontSize: 28,
    alignContent: 'center',
  },
});

