import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Navbar from '@/components/Navbar';
import "@/assets/styles/checkout.css";
import { router, useRouter } from 'expo-router';

export default function Checkout({  }) {
/*  // Parse the selected items from the JSON string
  const { selectedItems } = route.params;
  const [items, setItems] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (selectedItems) {
      setItems(JSON.parse(selectedItems));
    }
  }, [selectedItems]);

  // Calculate total amount based on selected items
  const totalAmount = items.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0);
*/
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
      <Text>------------------------------------------------------------------</Text>
      </View>

      <Text id="totalText">Cart Total: Rs. </Text>

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
