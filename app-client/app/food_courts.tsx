import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Navbar from "@/components/Navbar";
import "@/assets/styles/FoodCourts.css";
import "@/assets/images/QC_FC.jpg";

export default function FoodCourtList() {
  const [searchText, setSearchText] = useState("");

  const [foodCourts, setFoodCourts] = useState([
    {
      img: "https://nsinha025.github.io/FC-Images/campus-15-food-court-bhubaneshwar-food-court-6kzsnjb1d1.jpg",
      name: "FOOD COURT 1",
      campus: "Campus: 17",
      landmark: "Landmark: QC 1-4",
    },
    {
      name: "FOOD COURT 2",
      campus: "Campus: 16",
      landmark: "Landmark: Opposite Library",
    },
    {
      name: "FOOD COURT 3",
      campus: "Campus: 16",
      landmark: "Landmark: Opposite Library",
    },
    {
      name: "FOOD COURT 4",
      campus: "Campus: 16",
      landmark: "Landmark: Opposite Library",
    },
  ]);

  return (
    <View
      style={{
        backgroundColor: "#B3D4C3",
        height: "100%",
      }}
    >
      <Navbar />
      <View id="FC-maincontainer">
        <View id="FC-searchcontainer">
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Food Court Listings */}
        <ScrollView id="FC-listcontainer">
          {foodCourts.map((foodCourt, index) => (
            <TouchableOpacity key={index} id="FC-card">
              <Image 
                source={{ uri: foodCourt.img}}
                style={{
                  width: 75,
                  height: 75,
                }}
              />
              <Text style={styles.cardTitle}>{foodCourt.name}</Text>
              <Text style={styles.cardText}>{foodCourt.campus}</Text>
              <Text style={styles.cardText}>{foodCourt.landmark}</Text>
              <Text style={styles.mapText}>Map Location</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Bebas",
    color: "#1BCF5A",
    fontSize: 50,
    marginTop: "-20%",
    marginBottom: "10%",
    textAlign: "center",
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 10,
    color: "#003400",
  },

  card: {
    backgroundColor: "#0B6633",
    borderRadius: 10,
    padding: 20,
    marginVertical: "1%",
  },
  cardTitle: {
    fontSize: 22,
    color: "white",
    fontFamily: "Bebas",
  },
  cardText: {
    fontSize: 16,
    color: "white",
    marginTop: "1%",
  },
  mapText: {
    fontSize: 16,
    color: "#B3D4C3",
    textDecorationLine: "underline",
    marginTop: "1%",
  },
});
