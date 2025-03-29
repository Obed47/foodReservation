import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
const MealItem = ({ image, onPress }) => {
  return (
    <TouchableOpacity style={styles.imageItem} onPress={onPress}>
      <Image style={styles.image} source={image} />
      {/* <IconButton icon={"timelapse"} size={24} iconColor="black" /> */}
    </TouchableOpacity>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  imageItem: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "gray",
    borderStyle: "dotted",
  },
});
