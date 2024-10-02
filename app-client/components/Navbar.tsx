import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { useRouter } from "expo-router"; 

export default function Navbar() {
  const router = useRouter(); 

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        paddingLeft: "2%",
      }}
    >
      
      <TouchableOpacity onPress={() => router.back()}>
        <Image
          source={require("@/assets/images/kiit-logo.png")}
          style={{
            width: 75,
            height: 75,
          }}
        />
      </TouchableOpacity>

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
