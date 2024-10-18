import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import "@/assets/styles/itemlist.css";
import Navbar from '@/components/Navbar';
import { router } from 'expo-router';

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
      params: { selectedItems: JSON.stringify(selectedItems) }
    });
  };
  

  return (
    <View id="container">
      <Navbar/>
      <Text id="foodCourtDetails">Food Court Address: <Text id="mapLink">Map Link</Text></Text>
      <View id="searchContainer">
        <TextInput
          id="searchInput"
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <ScrollView id="itemList">
        {items.map((item) => (
          <View key={item.id} id="itemContainer">
            <Text id="itemName">{item.name}</Text>
            <Text id="price">{item.price}</Text>
            {item.quantity > 0 ? (
              <View id="counterContainer">
                <TouchableOpacity onPress={() => decrementItem(item.id)} id="counterButton">
                  <Text id="counterText">-</Text>
                </TouchableOpacity>
                <Text id="quantityText">{item.quantity}</Text>
                <TouchableOpacity onPress={() => incrementItem(item.id)} id="counterButton">
                  <Text id="counterText">+</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity onPress={() => incrementItem(item.id)} id="addButton">
                <Text id="addButtonText">Add</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity id="checkoutButton" onPress={handleCheckout}>
        <Text id="checkoutButtonText">CHECKOUT 🛒</Text>
      </TouchableOpacity>
    </View>
  );
}

