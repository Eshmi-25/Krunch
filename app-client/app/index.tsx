import React, { useEffect, useState } from "react";
import "@/assets/styles/IndexStyle.css";
import {
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import Navbar from "@/components/Navbar";
import { jwtDecode } from 'jwt-decode';

export default function Index() {
  const router = useRouter();
  const [layoutReady, setLayoutReady] = useState(false);

  useEffect(()=>{
    const toggleLayoutReady = () => {
      setLayoutReady(true);
    }
    toggleLayoutReady();
  }, [])

  useEffect(()=>{
    if(!layoutReady) return;
    const checkToken = () => {
      const token = localStorage.getItem("token");
      if(!token) {
        return;
      }
      const tokenData = jwtDecode(token);
      if(tokenData.usertype === "user") {
        router.push('/food_courts');
      }
      else {
        localStorage.removeItem("token");
      }
    }
    checkToken();
  }, [layoutReady])

  const handleGetStarted = () => {
    router.push("/register");
  };

  return (
    <View id="maincontainer">
      <ImageBackground
        source={require("@/assets/images/kiit_phone.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <View id="imagecover"></View>
        <View id="content-container">
          <View
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Navbar />
          </View>
          <View id="text-container">
            <View>
              <Text
                id="white-text"
                style={{
                  fontSize: 40,
                }}
              >
                ORDER FROM THE NEAREST{" "}
              </Text>
              <Text
                id="green-text"
                style={{
                  fontSize: 50,
                }}
              >
                FOOD COURT{" "}
              </Text>
            </View>
            <TouchableOpacity id="button" onPress={handleGetStarted}>
              <Text id="button-text">GET STARTED →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
