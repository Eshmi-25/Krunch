import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import "@/assets/styles/itemlist.css";
import Navbar from '@/components/Navbar';
import { router, useRouter,useLocalSearchParams } from 'expo-router';

export default function FoodCourtMenu() {
  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState([
    { id: 1, name: 'Fried Rice', price: '100.00', quantity: 0 },
    { id: 2, name: 'Veg Noodles', price: '100.00', quantity: 0 },
    { id: 3, name: 'Chic Noodles', price: '120.00', quantity: 0 },
    { id: 4, name: 'Veg Roll', price: '70.00', quantity: 0 },
    { id: 5, name: 'Chicken Roll', price: '90.00', quantity: 0 },
    { id: 6, name: 'Egg Roll', price: '80.00', quantity: 0 },
    { id: 7, name: 'Paneer Tikka', price: '150.00', quantity: 0 },
    { id: 8, name: 'Chicken Tikka', price: '180.00', quantity: 0 },
    { id: 9, name: 'Fish Fry', price: '200.00', quantity: 0 },
    { id: 10, name: 'Butter Chicken', price: '250.00', quantity: 0 },
    { id: 11, name: 'Paneer Butter Masala', price: '220.00', quantity: 0 },
    { id: 12, name: 'Chole Bhature', price: '150.00', quantity: 0 },
    { id: 13, name: 'Dal Makhani', price: '120.00', quantity: 0 },
    { id: 14, name: 'Mixed Veg', price: '110.00', quantity: 0 },
    { id: 15, name: 'Hakka Noodles', price: '130.00', quantity: 0 },
    { id: 16, name: 'Chicken Manchurian', price: '160.00', quantity: 0 },
    { id: 17, name: 'Veg Manchurian', price: '140.00', quantity: 0 },
    { id: 18, name: 'Spring Rolls', price: '90.00', quantity: 0 },
  ]);

  const params = useLocalSearchParams();
  const selectedFoodCourt = {
    name: params.name,
    campus: params.campus,
    landmark: params.landmark,
  };

  const incrementItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const handleCheckout = () => {
    const selectedItems = items.filter(item => item.quantity > 0);
    
    router.push({
      pathname: '/checkout',
      params: { 
        selectedItems: JSON.stringify(selectedItems),
        name: selectedFoodCourt.name,
        campus: selectedFoodCourt.campus,
        landmark: selectedFoodCourt.landmark,
      }
    });
  };
  

  return (
    <View id="IL-container">
      <View>
      <Navbar />
    </View>
    <View id="IL-maincontainer">
        <Text id="IL-foodCourtDetails">{selectedFoodCourt.name}</Text>
          <Text>{selectedFoodCourt.campus}</Text>
          <Text>{selectedFoodCourt.landmark}</Text>
        <Text id="IL-mapLink">Map Link</Text>
        <View id="IL-searchContainer">
          <TextInput
            id="IL-searchInput"
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText} />
        </View>

        <ScrollView>
          {items.map((item) => (
            <View key={item.id} id="IL-itemContainer">
              <Text id="IL-itemName">{item.name}</Text>
              <Text id="IL-price">{item.price}</Text>
              {item.quantity > 0 ? (
                <View id="IL-counterContainer">
                  <TouchableOpacity onPress={() => decrementItem(item.id)} id="IL-counterButton">
                    <Text id="IL-counterText">-</Text>
                  </TouchableOpacity>
                  <Text id="IL-quantityText">{item.quantity}</Text>
                  <TouchableOpacity onPress={() => incrementItem(item.id)} id="IL-counterButton">
                    <Text id="IL-counterText">+</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity onPress={() => incrementItem(item.id)} id="IL-addButton">
                  <Text id="IL-addButtonText">Add</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity id="IL-checkoutButton" onPress={handleCheckout}>
          <Text id="IL-checkoutButtonText">CHECKOUT 🛒</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
}

