import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { View } from "react-native";

type Props = {
  length?: number;
  rating?: number;
  size?: number;
};

const ReviewStars = ({ length = 5, rating = 0, size = 18 }: Props) => {
  return (
    <View className="flex flex-row gap-x-1">
      {Array.from({ length }).map((_, index) => (
        <AntDesign
          key={index}
          name="star"
          size={size}
          color={index < rating ? "#ffa928" : "#e6e6e6"}
        />
      ))}
    </View>
  );
};

export default ReviewStars;
