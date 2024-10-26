import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Navbar from '@/components/Navbar';
import { useLocalSearchParams } from 'expo-router';
import '@/assets/styles/final_page.css';

export default function OrderPlaced() {
    const { selectedItems, eta } = useLocalSearchParams();
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

    return (
        <View id="container">
            <Navbar />

            <View>
                <Text id="foodCourtDetails">Food Court 1</Text>
                <Text>Campus: 17</Text>
                <Text>Landmark: Next to MBA Garden</Text>
                <Text id="mapLink">Map Location</Text>
            </View>

            <View id="tableContainer">
                <Text style={{fontSize: 20, justifyContent: 'center'}}>ORDER PLACED</Text>
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
            <View>
            <Text>Pick-up time: {eta || "Not selected"}</Text>
            </View>
        </View>
    );
}
