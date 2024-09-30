import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

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

  // Function to handle adding items
  const incrementItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Function to handle reducing items
  const decrementItem = (id: number) => {
    setItems(items.map(item => 
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  return (
    <View style={styles.container}>
      {/* Header with Food Court Info */}
      <Text style={styles.foodCourtTitle}>Food Court</Text>
      <Text style={styles.foodCourtDetails}>Food Court Address: <Text style={styles.mapLink}>Map Link</Text></Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Item List */}
      <ScrollView style={styles.itemList}>
        {items.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            {item.quantity > 0 ? (
              <View style={styles.counterContainer}>
                <TouchableOpacity onPress={() => decrementItem(item.id)} style={styles.counterButton}>
                  <Text style={styles.counterText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => incrementItem(item.id)} style={styles.counterButton}>
                  <Text style={styles.counterText}>+</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity onPress={() => incrementItem(item.id)} style={styles.addButton}>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>CHECKOUT 🛒</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3D4C3',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  foodCourtTitle: {
    fontFamily: 'Bebas',
    color: '#003400',
    fontSize: 30,
    marginBottom: 5,
  },
  foodCourtDetails: {
    fontSize: 16,
    color: '#003400',
    marginBottom: 20,
  },
  mapLink: {
    color: '#1BCF5A',
    textDecorationLine: 'underline',
  },
  searchContainer: {
    backgroundColor: '#E3E9E5',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#003400',
  },
  itemList: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#0B6633',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Bebas',
  },
  addButton: {
    backgroundColor: '#1BCF5A',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Bebas',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    backgroundColor: '#1BCF5A',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  counterText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Bebas',
  },
  quantityText: {
    fontSize: 18,
    color: 'white',
    marginHorizontal: 10,
  },
  checkoutButton: {
    backgroundColor: '#0B6633',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Bebas',
  },
});
