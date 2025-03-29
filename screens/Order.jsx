import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { React, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import pizza from "../assets/pizza.jpeg";
import chicken from "../assets/chiken.jpeg";
import burger from "../assets/Burger.jpeg";
import FoodCard from "./FoodCard";
const Order = () => {
  const orders = [
    {
      id: 1,
      name: "Bitini Chiken",
      image: pizza,
      weight: 10,
      price: 20,
    },
    {
      id: 2,
      name: "Pizaa Takah",
      image: chicken,
      weight: 10,
      price: 80,
    },
    {
      id: 3,
      name: "Pizaa Takah ",
      image: burger,
      weight: 10,
      price: 120,
    },
  ];
  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.header1}>
          <Text style={{ fontWeight: "bold", fontSize: 24, color: "#E3001B" }}>
            FOODLY
          </Text>
          <View style={styles.headIcons}>
            <TouchableOpacity onPress={() => alert("under construction")}>
              <FontAwesome name="shopping-cart" size={30} color="#E3001B" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("under construction")}>
              <FontAwesome name="bars" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.header2}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>My Order</Text>
          <Text style={{ fontSize: 20, color: "gray" }}>
            {orders.length} Positions
          </Text>
        </View>
      </View>
      <View style={styles.list}>
        {orders.map((order) => (
          <FoodCard
            key={order.id}
            image={order.image}
            name={order.name}
            weight={order.weight}
            price={order.price}
          />
        ))}
      </View>
      <View style={styles.bottom}>
        <View style={styles.line}></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
            margin: "auto",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 16, color: "gray" }}>Promo code</Text>
          <TouchableOpacity style={{ flexDirection: "row", gap: 5 }}>
            <MaterialCommunityIcons
              name="form-textbox-password"
              size={24}
              color="black"
            />
            <Text>bata</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line}></View>
        <View
          style={{
            width: "90%",
            margin: "auto",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray" }}>
            Discount
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray" }}>
            -10%
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            margin: "auto",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray" }}>
            Delivery
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray" }}>
            FREE
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            margin: "auto",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "gray" }}>
            Total
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>
            $400
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("under construction")}
        >
          <Text style={{ fontWeight: "bold", color: "#fff" }}>
            Confirm Order
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Order;

const styles = StyleSheet.create({
  header: {
    marginTop: 70,
    width: "90%",
    marginHorizontal: "auto",
  },
  header1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headIcons: {
    flexDirection: "row",
    gap: 30,
  },
  header2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  line: {
    width: "90%",
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: "gray",
    marginHorizontal: "auto",
    marginTop: 20,
  },
  button: {
    width: "85%",
    height: 70,
    marginHorizontal: "auto",
    marginVertical: 25,
    backgroundColor: "#E3001B",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },
});
