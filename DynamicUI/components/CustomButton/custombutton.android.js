import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton = ({ onPress, title }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "lightblue",
        borderRadius: 20,
      }}
    >
      <Text style={{ color: "purple", fontSize: 18 }}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
