import React, { useState, useEffect } from "react";
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
import { router } from "expo-router";
interface FoodCourt {
  name: string;
  campus: string;
  landmark: string;
  img?: string;
}

export default function FoodCourtList() {
  const [searchText, setSearchText] = useState("");
  const token = localStorage.getItem('token');

  const [foodCourts, setFoodCourts] = useState<FoodCourt[]>([]);

  useEffect(() => {
    const getFoodCourts = async () => {
      try {
        const response = await fetch('http://localhost:3000/user/fetchFCs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'token': token || "",
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch food courts');
        }

        const data = await response.json();
        setFoodCourts(data);
      } catch (err) {
        console.log(err);
      }
    };

    getFoodCourts();
  }, [token]);

  const handleFoodCourtSelect = (foodCourt: {
    name: any;
    campus: any;
    landmark: any;
  }) => {
    router.push({
      pathname: "/item_list",
      params: {
        name: foodCourt.name,
        campus: foodCourt.campus,
        landmark: foodCourt.landmark,
      },
    });
  };

  return (
    <View id="fc_container">
      <View>
        <Navbar />
      </View>
      <View id="fc_mainContainer">
        <View id="fc_searchContainer">
          <TextInput
            id="fc_searchInput"
            placeholder="Search Food Courts"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <ScrollView>
          {foodCourts.map((foodCourt, index) => (
            <TouchableOpacity
              key={index}
              id="fc_card"
              onPress={() => handleFoodCourtSelect(foodCourt)}
            >
              {foodCourt.img && (
                <Image
                  source={{
                    uri: "https://nsinha025.github.io/FC-Images/campus-15-food-court-bhubaneshwar-food-court-6kzsnjb1d1.jpg",
                  }}
                  style={{
                    width: 65,
                    height: 75,
                    borderRadius: 10,
                    backgroundColor: "#ddd",
                  }}
                />
              )}
              <View id="fc_cardContent">
                <Text id="fc_cardTitle">{foodCourt.name}</Text>
                <Text id="fc_cardText">{foodCourt.campus}</Text>
                <Text id="fc_cardText">{foodCourt.landmark}</Text>
                <Text id="fc_mapText">Map Location</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
