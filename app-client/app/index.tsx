import React from "react";
import "@/assets/styles/IndexStyle.css"
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import Navbar from "@/components/Navbar";

export default function Index() {
  const router = useRouter();

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
          }}>
            <Navbar />
          </View>
          <View id="text-container">
            <View>
              <Text id="white-text"
                style={{
                  fontSize: 40
                }}
              >
                ORDER FROM THE NEAREST{" "}
              </Text>
              <Text id="green-text"
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

