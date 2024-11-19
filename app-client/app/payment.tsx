import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Navbar from "@/components/Navbar";
import { useLocalSearchParams, router } from "expo-router";
import "@/assets/styles/payment.css";

export default function Payment() {
  const { selectedItems, name, campus, landmark, map_link, phone } =
    useLocalSearchParams();
  const [items, setItems] = useState<
    { name: string; quantity: number; price: string }[]
  >([]);
  const { totalAmount } = useLocalSearchParams();
  const { eta } = useLocalSearchParams();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (selectedItems) {
      try {
        setItems(JSON.parse(selectedItems as string));
      } catch (error) {
        console.error("Error parsing selectedItems:", error);
      }
    }
  }, [selectedItems]);

  const proceedpayment = async () => {
    const itemList = JSON.parse(selectedItems as string);
    const response = await fetch("http://localhost:3000/user/placeOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token || "",
      },
      body: JSON.stringify({
        fc_no: name,
        phone_no: phone,
        total_amt: totalAmount,
        transaction_id: "",
        items: itemList,
      }),
    });
    if (!response.ok) {
      alert("Failed to place order");
      router.push({
        pathname: "/food_courts",
      });
    } else {
      alert("Order placed!");
      router.push({
        pathname: "/final_page",
        params: {
          selectedItems: JSON.stringify(items),
          totalAmount: totalAmount,
          eta: eta,
          name,
          campus,
          landmark,
          map_link,
        },
      });
    }
  };
  return (
    <View id="pay_main_container">
      <View>
        <Navbar navigateToFoodCourts={true} />
      </View>
      <View id="pay_container">
        <View>
          <Text id="pay_foodCourtDetails">Food Court: {name}</Text>
          <Text id="pay_fcinfo">Campus: {campus}</Text>
          <Text id="pay_fcinfo">Landmark: {landmark}</Text>
          {typeof map_link === "string" ? (
            <a href={map_link}>
              <Text id="CH-mapLink">Map Location</Text>
            </a>
          ) : (
            <Text>Map link not available</Text>
          )}
        </View>

        <Text id="pay_payment_amount">To Pay: Rs. {totalAmount}</Text>

        <TouchableOpacity id="pay_button2">
          <Text id="pay_buttonText">Pay via UPI</Text>
        </TouchableOpacity>

        <TouchableOpacity id="pay_button2">
          <Text id="pay_buttonText">Pay via Debit Card</Text>
        </TouchableOpacity>

        <View id="pay_buttonContainer">
          <TouchableOpacity
            id="pay_button_Cancel"
            onPress={() => router.push("/item_list")}
          >
            <Text id="pay_buttonText">Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity id="pay_button_Proceed" onPress={proceedpayment}>
            <Text id="pay_buttonText">Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
