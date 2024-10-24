import React from 'react';
import { View, Text } from 'react-native';
import Navbar from '@/components/Navbar';
import '@/assets/styles/final_page.css';
export default function OrderPlaced() {
    return (
        <View style={{ flex: 1 }}>
                <View >
                    <Navbar />
                </View>

                <View>
                    <Text id="foodCourtDetails">Food Court 1</Text>
                    <Text>Campus: 17</Text>
                    <Text>Landmark: Next to mba garden</Text>
                    <Text id="mapLink">Map Location</Text>
                </View>

            <View>
               
                <Text>Order Placed</Text>
                <View>
                    <Text>ITEM</Text>
                    <Text>QTY</Text>
                    <Text>PRICE</Text>
                </View>

                <View>
                    <Text>Fried Rice</Text>
                    <Text>1</Text>
                    <Text>100.00</Text>
                </View>
                <View>
                    <Text>Noodles</Text>
                    <Text>2</Text>
                    <Text>100.00</Text>
                </View>
            </View>

            <Text>Pick-up time: 2:00pm</Text>
        </View>
    );
}
