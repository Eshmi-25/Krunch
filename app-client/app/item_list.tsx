import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import "@/assets/styles/itemlist.css";
import Navbar from '@/components/Navbar';


export default function FoodCourtMenu() {
  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState([
    { id: 1, name: 'ITEM 1', quantity: 0 },
    { id: 2, name: 'ITEM 2', quantity: 0 },
    { id: 3, name: 'ITEM 3', quantity: 0 },
    { id: 4, name: 'ITEM 4', quantity: 0 },
    { id: 5, name: 'ITEM 5', quantity: 0 },
    { id: 6, name: 'ITEM 6', quantity: 0 },
    { id: 7, name: 'ITEM 7', quantity: 0 },
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

     
      <TouchableOpacity id="checkoutButton">
        <Text id="checkoutButtonText">CHECKOUT 🛒</Text>
      </TouchableOpacity>
    </View>
  );
}
