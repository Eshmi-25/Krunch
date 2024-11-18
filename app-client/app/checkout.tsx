import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, FlatList, Alert } from 'react-native';
import Navbar from '@/components/Navbar';
import "@/assets/styles/checkout.css";
import { router, useLocalSearchParams } from 'expo-router';

export default function Checkout() {
  const { selectedItems, name, campus, landmark } = useLocalSearchParams();
  const [items, setItems] = useState<{ name: string; quantity: number; price: string }[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [etaOptions, setEtaOptions] = useState<string[]>([]);
  const [selectedEta, setSelectedEta] = useState<string>("");

  useEffect(() => {
    if (selectedItems) {
      try {
        setItems(JSON.parse(selectedItems as string));
      } catch (error) {
        console.error("Error parsing selectedItems:", error);
      }
    }
  }, [selectedItems]);

  useEffect(() => {
    const generateTimeIntervals = () => {
      const intervals = [];
      const now = new Date();
      let startTime = new Date(now);

      startTime.setMinutes(Math.ceil(startTime.getMinutes() / 15) * 15, 0, 0);
      const endTime = new Date();
      endTime.setHours(19, 0, 0, 0);

      while (startTime <= endTime) {
        const hours = startTime.getHours().toString().padStart(2, '0');
        const minutes = startTime.getMinutes().toString().padStart(2, '0');
        intervals.push(`${hours}:${minutes}`);
        startTime.setMinutes(startTime.getMinutes() + 15);
      }

      setEtaOptions(intervals);
    };

    generateTimeIntervals();
  }, []);

  const totalAmount = items.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0);

  const handleEtaSelect = (time: string) => {
    setSelectedEta(time);
    setIsDropdownOpen(false);
  };

  const handlePaymentNavigation = () => {
    if (!selectedEta) {
      Alert.alert("ETA Required", "Please select an ETA before proceeding to payment.");
      return;
    }

  
    router.push({
      pathname: '/payment',
      params: { 
        selectedItems: JSON.stringify(items), 
        totalAmount: totalAmount.toFixed(2), 
        eta: selectedEta,
        name, 
        campus, 
        landmark,
      },
    });
  };

  return (
    <View id="container">
      <Navbar />
      <Text id="foodCourtDetails">{name}</Text>
      <Text>Campus: {campus}</Text>
      <Text>Landmark: {landmark}</Text>
      <Text id="mapLink">Map Location</Text>

      <View id="tableContainer">
        <View id="tableHeader" style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text id="tableText">ITEM</Text>
          <Text id="tableText">QTY</Text>
          <Text id="tableText">PRICE</Text>
        </View>

        <View>
          {items.map((item, index) => (
            <View key={index} id="tableRow" style={{ flexDirection: "row" }}>
              <Text id="itemText">{item.name}</Text>
              <Text id="itemText">{item.quantity}</Text>
              <Text id="itemText">Rs.{parseFloat(item.price).toFixed(2)}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text id="totalText">Cart Total: Rs.{totalAmount.toFixed(2)}</Text>

      <TextInput
        id="phoneInput"
        placeholder="Phone Number"
        keyboardType="numeric"
      />

      <TouchableOpacity id="etaButton" onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
        <Text id="buttonText">{selectedEta ? `ETA: ${selectedEta}` : 'Select ETA ▼'}</Text>
      </TouchableOpacity>

      <Modal
        transparent
        visible={isDropdownOpen}
        animationType="fade"
        onRequestClose={() => setIsDropdownOpen(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <FlatList
              data={etaOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleEtaSelect(item)}>
                  <Text id="item">{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      <TouchableOpacity id="paymentButton" onPress={handlePaymentNavigation}>
        <Text id="paymentButtonText">Payment ▶</Text>
      </TouchableOpacity>
    </View>
  );
}
