import Shirt from "@/assets/images/shirt.jpg";
import { sizeBlock } from "@/styles/universalStyle";
import { Product } from "@/types/product";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image, ImageStyle } from "expo-image";
import React from "react";
import { Pressable, View } from "react-native";
import AppText from "../ui/AppText";

type Props = {
  onSaveToggle: () => void;
  item: Product;
  isSaved: boolean;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  showDescription?: boolean;
  imageStyle?: ImageStyle;
};

const ProductCard = ({
  isSaved,
  onSaveToggle,
  item,
  containerClassName,
  titleClassName,
  descriptionClassName,
  showDescription = true,
  imageStyle,
}: Props) => {
  return (
    <View
      className={`w-full h-56 gap-y-1 relative ${containerClassName ?? ""}`}
    >
      <Pressable
        onPress={onSaveToggle}
        className="absolute z-20 right-3 top-3 bg-white size-10 flex items-center justify-center rounded-lg shadow-xl shadow-gray-400"
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
          ...(imageStyle ?? {}),
        }}
      />

      <AppText
        weight="semibold"
        className={`mt-3 font-outfit-semibold text-base ${titleClassName ?? ""}`}
        numberOfLines={1}
      >
        {item.name}
      </AppText>
      {showDescription && (
        <AppText
          weight="medium"
          className={`text-xs font-outfit-medium text-secondary ${descriptionClassName ?? ""}`}
          numberOfLines={1}
        >
          ${item.price.toFixed(2)}{" "}
          <AppText weight="semibold" className="text-red-400">
            -{item.discountPercent}%
          </AppText>
        </AppText>
      )}
    </View>
  );
};

export default ProductCard;
