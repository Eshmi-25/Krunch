import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

export default function Navbar() {
  return (
    <View 
    style={{
        display:"flex",
        flexDirection: "row",
        gap: 20,
        alignItems: "center",

    }}>
      <Image
        source={require("@/assets/images/kiit-logo.png")}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <Text
        style={{
          fontFamily: "Bebas",
          color: "#1BCF5A",
          fontSize: 50,
        }}
      >
        KRUNCH
      </Text>
    </View>
  );
}
