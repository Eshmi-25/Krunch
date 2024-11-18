import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Navbar from "@/components/Navbar";
import { useLocalSearchParams } from "expo-router";
import "@/assets/styles/final_page.css";

export default function OrderPlaced() {
  const { selectedItems, eta, name, campus, landmark } = useLocalSearchParams();
  const [items, setItems] = useState<
    { name: string; quantity: number; price: string }[]
  >([]);
  const { totalAmount } = useLocalSearchParams();
  const [otp, setOtp] = useState<string | null>(null);

  useEffect(() => {
    if (selectedItems) {
      try {
        setItems(JSON.parse(selectedItems as string));
      } catch (error) {
        console.error("Error parsing selectedItems:", error);
      }
    }
  }, [selectedItems]);

  return (
    <View id="fp_maincontainer">
      <View>
        <Navbar />
      </View>
      <View id="fp_container">
        <View>
          <Text id="fp_foodCourtTitle">{name}</Text>
          <Text id="fp_foodCourtDetails">{campus}</Text>
          <Text id="fp_foodCourtDetails">{landmark}</Text>
          <Text id="fp_mapLink">Map Location</Text>
        </View>

        <View id="fp_tableContainer">
          <View
            id="fp_tableHeader"
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text id="fp_tableText">ITEM</Text>
            <Text id="fp_tableText">QTY</Text>
            <Text id="fp_tableText">PRICE</Text>
          </View>

          <View>
            {items.map((item, index) => (
              <View
                key={index}
                id="fp_tableRow"
                style={{ flexDirection: "row" }}
              >
                <Text id="fp_itemText">{item.name}</Text>
                <Text id="fp_itemText">{item.quantity}</Text>
                <Text id="fp_itemText">
                  Rs.{parseFloat(item.price).toFixed(2)}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View>
          <Text id="orderplaced">ORDER PLACED</Text>
          <Text id="totalamt">Total Amount: {totalAmount} </Text>
          <Text id="pay_pickuptime">Pick-up time: {eta || "Not selected"}</Text>
          {otp && <Text id="otpText">Your OTP: {otp}</Text>}
        </View>
      </View>
    </View>
  );
}
