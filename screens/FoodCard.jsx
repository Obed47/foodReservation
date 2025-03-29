import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { React, useState } from "react";

const FoodCard = ({ image, name, weight, price, increment, decrement }) => {
  const [quantity, setQuantity] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(30);
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image style={styles.image} source={image} />
      </View>
      <View style={styles.details}>
        <View style={styles.top}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>{name}</Text>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>{weight}g</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={{ fontWeight: "bold", color: "#E3001B" }}>
            $ {price}
          </Text>
          <View style={styles.counter}>
            <TouchableOpacity
              style={styles.counterBotton}
              onPress={() => quantity > 0 && setQuantity((prev) => prev - 1)}
            >
              <Text style={{ fontWeight: "bold" }}>-</Text>
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity
              style={styles.counterBotton}
              onPress={() => {
                setQuantity((prev) => prev + 1);
              }}
            >
              <Text style={{ fontWeight: "bold" }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: "auto",
    marginLeft: 5,
  },
  container: {
    width: "95%",
    height: 150,
    marginHorizontal: "auto",
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
    borderWidth: 1.5,
    marginVertical: 5,
    borderRadius: 20,
    borderStyle: "dashed",
    borderColor: "gray",
  },
  details: {
    width: "60%",
  },
  bottom: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  counterBotton: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#afafaf",
  },
});
