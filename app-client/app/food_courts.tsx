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
  fc_no: number;
  campus: string;
  landmark: string;
  map_link: string;
  image_link?: string;
}

export default function FoodCourtList() {
  const [searchText, setSearchText] = useState("");
  const token = localStorage.getItem("token");

  const [foodCourts, setFoodCourts] = useState<FoodCourt[]>([]);

  useEffect(() => {
    const getFoodCourts = async () => {
      try {
        const response = await fetch("http://localhost:3000/user/fetchFCs", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: token || "",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch food courts");
        }

        const data = await response.json();
        console.log(data);
        setFoodCourts(data);
      } catch (err) {
        console.log(err);
      }
    };

    getFoodCourts();
  }, [token]);

  const handleFoodCourtSelect = (foodCourt: {
    fc_no: any;
    campus: any;
    landmark: any;
    map_link: any;
  }) => {
    router.push({
      pathname: "/item_list",
      params: {
        name: foodCourt.fc_no,
        campus: foodCourt.campus,
        landmark: foodCourt.landmark,
        map_link: foodCourt.map_link
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
              {foodCourt.image_link && (
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
                <Text id="fc_cardTitle">Food Court: {foodCourt.fc_no}</Text>
                <Text id="fc_cardText">{foodCourt.campus}</Text>
                <Text id="fc_cardText">{foodCourt.landmark}</Text>
                <a href={foodCourt.map_link}>
                  <Text id="fc_mapText">Map Location</Text>
                </a>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
