import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import veg from "../assets/veg.png";
import icons from "../assets/icons.png";
import cart from "../assets/cart.png";
const width = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.veg} source={veg} />
        <Text style={styles.foody}>FOODLY</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.centerText}>
          <Text style={styles.text}>
            {" "}
            <Text style={{ color: "#E3001B" }}>Hungry?</Text> Get it Fast
          </Text>
          <Text>Fast, Fresh just the way you like it!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.circle}>
              <Image
                source={cart}
                style={{
                  width: 40,
                  height: 40,
                  margin: "auto",
                }}
              />
            </View>
            <Text style={styles.buttonText}>Order Now</Text>
            <Image style={styles.icons} source={icons} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E3001B",
    height: screenHeight,
    width: width,
  },
  top: {
    height: screenHeight / 2,
  },
  bottom: {
    height: screenHeight / 2,
    backgroundColor: "#fff",
    height: screenHeight / 2,
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
  },
  veg: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
    marginTop: 40,
  },
  foody: {
    margin: "auto",
    fontWeight: 900,
    fontSize: 40,
    color: "#fff",
  },
  centerText: {
    marginHorizontal: "auto",
    marginVertical: 100,
  },
  text: {
    fontWeight: "bold",
    fontSize: 23,
  },
  buttonContainer: {
    marginHorizontal: "auto",
    height: 100,
    width: "100%",
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "red",
    margin: 10,
  },
  button: {
    width: "80%",
    height: 80,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#dddddd",
    margin: "auto",
    borderRadius: 40,
    elevation: 10,
  },
  buttonText: {
    marginLeft: 50,
  },
  icons: {
    width: 80,
    height: 20,
    marginLeft: 10,
  },
});
