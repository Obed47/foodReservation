import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import { ScrollView } from "react-native";
import food from "../assets/unsplash_dCTcUYWwEc8.png";
import burger from "../assets/Burger.jpeg";
import cake from "../assets/cake.jpeg";
import pizza from "../assets/pizza.jpeg";
import chicken from "../assets/chiken.jpeg";
import MealItem from "./MealItem";

const Categories = () => {
  const [count, setCount] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("Pasta");
  const [selectedSize, setSelectedSize] = useState("30g");
  const [mainFood, setMainFood] = useState(food);
  const [foodTitle, setFoodTitle] = useState("Rotini Delight");
  const [price, setPrice] = useState(44.6);
  const handleChangeMeal = (meal, mealTitle, newPrice) => {
    setMainFood(meal);
    setFoodTitle(mealTitle);
    setPrice(newPrice);
    console.log("changed to " + mealTitle);
  };
  return (
    <ScrollView>
      <View style={styles.top}>
        <Text style={styles.title}>Meal Category</Text>
        <ScrollView
          style={styles.list}
          horizontal={true}
          contentContainerStyle={{ gap: 25 }}
          showsHorizontalScrollIndicator={false}
        >
          <Text
            onPress={() => {
              setCurrentCategory("Pasta");
              setMainFood(food);
            }}
            style={
              currentCategory == "Pasta"
                ? styles.optionHighlighted
                : styles.option
            }
          >
            Pasta
          </Text>
          <Text
            onPress={() => {
              setCurrentCategory("Salad");
              setMainFood(chicken);
            }}
            style={
              currentCategory == "Salad"
                ? styles.optionHighlighted
                : styles.option
            }
          >
            Salad
          </Text>
          <Text
            onPress={() => {
              setCurrentCategory("Seafood");
              setMainFood(burger);
            }}
            style={
              currentCategory == "Seafood"
                ? styles.optionHighlighted
                : styles.option
            }
          >
            Seafood
          </Text>
          <Text
            onPress={() => {
              setCurrentCategory("Soups");
              handleChangeMeal(pizza);
            }}
            style={
              currentCategory == "Soups"
                ? styles.optionHighlighted
                : styles.option
            }
          >
            Soups
          </Text>
          <Text
            onPress={() => {
              setCurrentCategory("Roast");
              setMainFood(cake);
            }}
            style={
              currentCategory == "Roast"
                ? styles.optionHighlighted
                : styles.option
            }
          >
            Roast
          </Text>
        </ScrollView>
      </View>
      <View style={styles.middle}>
        <TouchableOpacity>
          <IconButton icon="arrow-left" size={30} color="#E3001B" />
        </TouchableOpacity>

        <Image style={styles.image} source={mainFood} />
        <TouchableOpacity>
          <IconButton icon="heart" size={30} iconColor="#E3001B" />
        </TouchableOpacity>
      </View>
      <View style={styles.details}>
        <Text style={styles.foodName}>{foodTitle}</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolore
          nulla temporibus sit inventore repudiandae aliquam? Asperiores beatae
          eligendi nisi
        </Text>
        <Text style={styles.subtitle}>Size</Text>
        <View style={styles.sizes}>
          <Text
            onPress={() => setSelectedSize("30g")}
            style={selectedSize == "30g" ? styles.selectedSize : styles.size}
          >
            30g
          </Text>
          <Text
            onPress={() => setSelectedSize("40g")}
            style={selectedSize == "40g" ? styles.selectedSize : styles.size}
          >
            40g
          </Text>
          <Text
            onPress={() => setSelectedSize("50g")}
            style={selectedSize == "50g" ? styles.selectedSize : styles.size}
          >
            50g
          </Text>
        </View>
        <Text style={styles.subtitle}>Build Your Meal</Text>
        <View style={styles.mealOptions}>
          <MealItem
            image={burger}
            onPress={() => handleChangeMeal(burger, "Hamburger", 50.99)}
          />
          <MealItem
            image={cake}
            onPress={() => handleChangeMeal(cake, "Cake", 12.77)}
          />
          <MealItem
            image={pizza}
            onPress={() => handleChangeMeal(pizza, "Pizza", 23.88)}
          />
          <MealItem
            image={chicken}
            onPress={() => handleChangeMeal(chicken, "Chicken", 90.12)}
          />
        </View>
      </View>
      <View style={styles.buttom}>
        <Text style={{ fontWeight: 800, padding: 20 }}>$ {price}</Text>
        <View style={styles.counter}>
          <TouchableOpacity
            style={styles.countButton}
            onPress={() => setCount(count - 1)}
          >
            <Text style={{ fontWeight: 800 }}>-</Text>
          </TouchableOpacity>
          <Text
            style={{ marginVertical: "auto", fontWeight: 800, fontSize: 24 }}
          >
            {count}
          </Text>
          <TouchableOpacity
            style={styles.countButton}
            onPress={() => setCount(count + 1)}
          >
            <Text style={{ fontWeight: 800 }}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={{ fontWeight: 800, color: "white" }}>Add to Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  top: {
    marginTop: 50,
    marginLeft: 10,
  },
  list: {
    marginTop: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 900,
  },
  option: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  optionHighlighted: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: "#000000",
    color: "white",
  },
  image: {
    marginHorizontal: "auto",
    width: 350,
    height: 350,
    marginTop: 10,
    borderRadius: 100,
  },
  middle: {
    flexDirection: "row",
  },
  details: {
    margin: 20,
  },
  foodName: {
    fontSize: 23,
    fontWeight: 600,
    color: "#E3001B",
  },
  subtitle: {
    fontSize: 15,
    marginTop: 10,
  },
  sizes: {
    flexDirection: "row",
    marginTop: 5,
    gap: 10,
  },
  size: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: "#808080",
  },
  selectedSize: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: "#808080",
    backgroundColor: "black",
    color: "white",
  },
  mealOptions: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
  buttom: {
    width: "85%",
    marginHorizontal: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 100,
  },
  counter: {
    flexDirection: "row",
    width: 200,
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#8080805a",
    width: 150,
    height: 60,
    borderRadius: 30,
  },
  countButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#E3001B",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginVertical: "auto",
  },
  addButton: {
    backgroundColor: "#E3001B",
    padding: 15,
    borderRadius: 10,
  },
});
