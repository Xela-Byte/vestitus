import Shirt from "@/assets/images/shirt.jpg";
import { sizeBlock } from "@/styles/universalStyle";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from "expo-image";
import React from "react";
import { Pressable, View } from "react-native";
import AppText from "../ui/AppText";

type Props = {
  isSaved: boolean;
  onSaveToggle?: () => void;
  name?: string;
  price?: number;
};

const ProductCard = ({
  isSaved = false,
  onSaveToggle,
  name = "Product Name",
  price = 99.99,
}: Props) => {
  return (
    <View className="w-full h-56 gap-y-1 relative">
      <Pressable
        onPress={onSaveToggle}
        className="absolute z-20 right-3 top-3 bg-white size-10 flex items-center justify-center rounded-lg"
      >
        {!isSaved ? (
          <Feather name="heart" size={18} color={"#1a1a1a"} />
        ) : (
          <FontAwesome name="heart" size={18} color={"#ff0000"} />
        )}
      </Pressable>
      <Image
        source={Shirt}
        style={{
          width: "100%",
          height: "80%",
          borderRadius: sizeBlock.getWidthSize(10),
        }}
      />

      <AppText
        weight="semibold"
        className="mt-3 font-outfit-semibold text-base"
        numberOfLines={1}
      >
        {name}
      </AppText>
      <AppText
        weight="medium"
        className="text-xs font-outfit-medium text-secondary"
        numberOfLines={1}
      >
        ${price.toFixed(2)}{" "}
        <AppText weight="medium" className="text-red-400">
          -70%
        </AppText>
      </AppText>
    </View>
  );
};

export default ProductCard;
