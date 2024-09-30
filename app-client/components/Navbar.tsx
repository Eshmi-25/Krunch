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
        gap: 10,
        alignItems: "center",
        paddingLeft: "2%"

    }}>
      <Image
        source={require("@/assets/images/kiit-logo.png")}
        style={{
          width: 75,
          height: 75,
        }}
      />
      <Text
        style={{
          fontFamily: "Bebas",
          color: "#1BCF5A",
          fontSize: 40,
        }}
      >
        KRUNCH
      </Text>
    </View>
  );
}
