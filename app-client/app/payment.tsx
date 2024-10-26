import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Navbar from '@/components/Navbar';
import { useLocalSearchParams, router } from 'expo-router';
import '@/assets/styles/payment.css';

export default function Payment() {
    const { selectedItems } = useLocalSearchParams();  
    const [items, setItems] = useState<{ name: string; quantity: number; price: string }[]>([]);
    const { totalAmount } = useLocalSearchParams();
    const {eta} = useLocalSearchParams();
    

    useEffect(() => {
        if (selectedItems) {
          try {
            setItems(JSON.parse(selectedItems as string));
          } catch (error) {
            console.error("Error parsing selectedItems:", error);
          }
        }
      }, [selectedItems]);
    
    const proceedpayment = () => {

        router.push({
        pathname: '/final_page',
        params: { 
          selectedItems: JSON.stringify(items), 
          totalAmount: totalAmount, 
          eta: eta 
        },
      });
  };
    return (
        <View style={{ flex: 1 }}>
            <View id="main_container" >
                <View >
                    <Navbar />
                </View>

                <View>
                    <Text id="foodCourtDetails">Food Court 1</Text>
                    <Text>Campus: 17</Text>
                    <Text>Landmark: Next to mba garden</Text>
                    <Text id="mapLink">Map Location</Text>
                </View>

                <Text id="payment_amount">To Pay: Rs. {totalAmount}</Text>

                <TouchableOpacity id="button">
                    <Text id="buttonText">Pay via UPI</Text>
                </TouchableOpacity>

                <TouchableOpacity id="button">
                    <Text id="buttonText">Pay via Debit Card</Text>
                </TouchableOpacity>

                <View id="buttonContainer">
                    <TouchableOpacity id="button_Cancel" onPress={() => router.push('/item_list')}>
                        <Text id="buttonText">Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity id="button_Proceed" onPress={proceedpayment}>
                        <Text id="buttonText">Proceed</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}