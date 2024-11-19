import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  Alert,
} from "react-native";
import Navbar from "@/components/Navbar";
import "@/assets/styles/checkout.css";
import { router, useLocalSearchParams } from "expo-router";

export default function Checkout() {
  const { selectedItems, name, campus, landmark, map_link } =
    useLocalSearchParams();
  const [items, setItems] = useState<
    { name: string; quantity: number; price: string }[]
  >([]);
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

      // while (startTime <= endTime) {
      const hours = startTime.getHours().toString().padStart(2, "0");
      const minutes = startTime.getMinutes().toString().padStart(2, "0");
      intervals.push(`${hours}:${minutes}`);
      startTime.setMinutes(startTime.getMinutes() + 15);
      // }

      setEtaOptions(intervals);
    };

    generateTimeIntervals();
  }, []);

  const totalAmount = items.reduce(
    (total, item) => total + item.quantity * parseFloat(item.price),
    0
  );

  const handleEtaSelect = (time: string) => {
    setSelectedEta(time);
    setIsDropdownOpen(false);
  };

  const handlePaymentNavigation = () => {
    if (!selectedEta) {
      Alert.alert(
        "ETA Required",
        "Please select an ETA before proceeding to payment."
      );
      return;
    }

    router.push({
      pathname: "/payment",
      params: {
        selectedItems: JSON.stringify(items),
        totalAmount: totalAmount.toFixed(2),
        eta: selectedEta,
        name,
        campus,
        landmark,
        map_link,
      },
    });
  };

  return (
    <View id="CH-maincontainer">
      <View>
        <Navbar />
      </View>
      <View id="CH-container">
        <Text id="CH-foodCourtDetails">{name}</Text>
        <Text id="CH-details">Campus: {campus}</Text>
        <Text id="CH-details">Landmark: {landmark}</Text>
        {typeof map_link === "string" ? (
          <a href={map_link}>
            <Text id="CH-mapLink">Map Location</Text>
          </a>
        ) : (
          <Text>Map link not available</Text>
        )}
        <View id="CH-tableContainer">
          <View id="CH-tableHeader">
            <Text id="CH-tableText">ITEM</Text>
            <Text id="CH-tableText">QTY</Text>
            <Text id="CH-tableText">PRICE</Text>
          </View>

          <View>
            {items.map((item, index) => (
              <View id="CH-itemCont">
                <Text id="CH-itemText">{item.name}</Text>
                <Text id="CH-itemText">{item.quantity}</Text>
                <Text id="CH-itemText">
                  Rs.{parseFloat(item.price).toFixed(2)}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <Text id="CH-totalText">Cart Total: Rs.{totalAmount.toFixed(2)}</Text>

        <TextInput
          id="CH-phoneInput"
          placeholder="Phone Number"
          keyboardType="numeric"
        />

        <TouchableOpacity
          id="CH-etaButton"
          onPress={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <Text id="CH-buttonText">
            {selectedEta ? `ETA: ${selectedEta}` : "Select ETA ▼"}
          </Text>
        </TouchableOpacity>

        <Modal
          transparent
          visible={isDropdownOpen}
          animationType="fade"
          onRequestClose={() => setIsDropdownOpen(false)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 10,
              }}
            >
              <FlatList
                data={etaOptions}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleEtaSelect(item)}>
                    <Text id="CH-item">{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          id="CH-paymentButton"
          onPress={handlePaymentNavigation}
        >
          <Text id="CH-paymentButtonText">Payment ▶</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
