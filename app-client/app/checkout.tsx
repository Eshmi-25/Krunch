import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Navbar from '@/components/Navbar';
import "@/assets/styles/checkout.css";
import { useLocalSearchParams } from 'expo-router';

export default function Checkout() {
  const { selectedItems } = useLocalSearchParams();  
  const [items, setItems] = useState<{ name: string; quantity: number; price: string }[]>([]);
  
  
  useEffect(() => {
    if (selectedItems) {
      try {
        setItems(JSON.parse(selectedItems as string));
      } catch (error) {
        console.error("Error parsing selectedItems:", error);
      }
    }
  }, [selectedItems]);
  const totalAmount = items.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0);


  return (
    <View id="container">
      <Navbar/>
      <Text id="foodCourtDetails">Food Court 1</Text>
      <Text>Campus: 17</Text>
      <Text>Landmark: Next to mba garden</Text>
      <Text id="mapLink">Map Location</Text>

      <View id="tableContainer">
      <View id="tableHeader" style={{ flexDirection: "row", justifyContent: "space-between" }}>
       <Text id="tableText">ITEM</Text>
       <Text id="tableText">QTY</Text>
       <Text id="tableText">PRICE</Text>
      </View>
      <Text style={{justifyContent: "space-between"}}>------------------------------------------------------------------</Text>
      <View>
      {items.map((item, index) => (
          <View key={index} id="tableRow" style={{ flexDirection: "row"}}>
            <Text id="itemText">{item.name}</Text>
            <Text id="itemText">{item.quantity}</Text>
            <Text id="itemText">Rs.{parseFloat(item.price).toFixed(2)}</Text>
          </View>
        ))}
      </View>
      </View>
     

      <Text id="totalText">Cart Total: Rs.{totalAmount.toFixed(2)} </Text>

      <TextInput
        id="phoneInput"
        placeholder="Phone Number"
        keyboardType="numeric"
        
      />

      <TouchableOpacity id="etaButton">
        <Text id="buttonText">Select ETA ▼</Text>
      </TouchableOpacity>

      <TouchableOpacity id="paymentButton">
        <Text id="paymentButtonText">Payment ▶</Text>
      </TouchableOpacity>
    </View>
  );
}
