import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';


export default function FoodCourtList() {
  const [searchText, setSearchText] = useState('');

  const foodCourts = [
    {
      name: 'FOOD COURT 1',
      campus: 'Campus: 17',
      landmark: 'Landmark: QC 1-4, Mahatma Gandhi Statue',
    },
    {
      name: 'FOOD COURT 2',
      campus: 'Campus: 16',
      landmark: 'Landmark: Opposite Library',
    },
    {
      name: 'FOOD COURT 3',
      campus: 'Campus: 16',
      landmark: 'Landmark: Opposite Library',
    },
    {
      name: 'FOOD COURT 4',
      campus: 'Campus: 16',
      landmark: 'Landmark: Opposite Library',
    },
  ];

  return (
    <View style={styles.container}>
     
      <Image 
        source={require('@/assets/images/kiit-logo.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />
      <Text style={styles.title}>KRUNCH</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Food Court Listings */}
      <ScrollView style={styles.listContainer}>
        {foodCourts.map((foodCourt, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{foodCourt.name}</Text>
            <Text style={styles.cardText}>{foodCourt.campus}</Text>
            <Text style={styles.cardText}>{foodCourt.landmark}</Text>
            <Text style={styles.mapText}>Map Location</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  logo: {
    width: 100, 
    height: 100,
    
       
  },
  title: {
    fontFamily: 'Bebas',
    color: '#1BCF5A',
    fontSize: 50,
    marginTop: '-20%',
    marginBottom: 20,
    textAlign: 'center', 
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
  listContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: '#0B6633',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: 22,
    color: 'white',
    fontFamily: 'Bebas',
  },
  cardText: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  mapText: {
    fontSize: 16,
    color: '#B3D4C3',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
