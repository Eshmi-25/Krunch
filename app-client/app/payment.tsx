import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Navbar from '@/components/Navbar';
import { useLocalSearchParams, router } from 'expo-router';
import '@/assets/styles/payment.css';

export default function Payment() {
    const { totalAmount } = useLocalSearchParams();

    return (
        <View style={{ flex: 1 }}>
            <View id="main_container" style={{ flex: 1, padding: 0, margin: 0 }}>
                <View style={{ display: "flex", justifyContent: "flex-start" }}>
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
                    <TouchableOpacity id="button_Cancel">
                        <Text id="buttonText">Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity id="button_Proceed">
                        <Text id="buttonText">Proceed</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}