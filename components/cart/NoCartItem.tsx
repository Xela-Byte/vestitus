import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { View } from "react-native";
import AppText from "../ui/AppText";

const NoCartItem = () => {
  return (
    <View className="flex-1 flex items-center justify-center gap-y-1">
      <FontAwesome
        name="shopping-cart"
        size={64}
        color="#c3c3c3"
        className="mb-3"
      />
      <AppText className="text-xl font-outfit-semibold">
        Your Cart Is Empty!
      </AppText>
      <AppText className="text-base text-secondary">
        When you add products, they&apos;ll appear here.
      </AppText>
    </View>
  );
};

export default NoCartItem;
