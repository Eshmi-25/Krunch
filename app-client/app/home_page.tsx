import React from 'react';
import { Image, TouchableOpacity, View, Text, ImageBackground, StyleSheet } from 'react-native';
import {useRouter} from 'expo-router';

export default function Index() {
  const router = useRouter();

  const handleGetStarted =() =>{
    router.push('/register');
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
          <View>
          <View >
              <Image 
                source={require('@/assets/images/kiit-logo.png')}
                style={{
                  width: 100,
                  height: 100,
                  marginTop: '0%',
                  marginLeft: '5%',
                  
                }}
              />
              <Text 
                style={{
                  fontFamily: "Bebas",
                  color: "#1BCF5A",
                  fontSize: 50,
                  marginTop: '-20%',
                  marginLeft: '35%',
                }}>KRUNCH</Text>
            </View>
            <View>
            <View>
            <Text
            style={{
              fontFamily: "Bebas",
              color: "#fff",
              fontSize: 40,
              marginTop: '110%',
              marginLeft: '10%',
            }}>ORDER FROM THE NEAREST </Text>
            <Text 
            style={{
              fontFamily: "Bebas",
              color: "#1BCF5A",
              fontSize: 50,
              marginLeft: '10%',
              marginBottom: '2%',
            }}>FOOD COURT </Text>
             </View>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>GET STARTED →</Text>
          </TouchableOpacity>
          </View>
        </View>
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
    alignContent: 'center',
    marginBottom:'10%',
    marginLeft: '10%',
    marginRight: '10%',
    opacity: 2,
  },
  buttonText: {
    fontFamily: "Bebas",
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 28,
    
  },
});
