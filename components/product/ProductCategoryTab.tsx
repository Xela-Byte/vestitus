import React from "react";
import { FlatList, Pressable, View } from "react-native";
import AppText from "../ui/AppText";

type Props = {
  onCategorySelect?: (category: string) => void;
  selectedCategory?: string;
};

const CLOTH_CATEGORIES = [
  "All",
  "T-Shirts",
  "Shirts",
  "Jeans",
  "Jackets",
  "Dresses",
  "Shoes",
];

const ProductCategoryTab = ({ onCategorySelect, selectedCategory }: Props) => {
  const renderCategoryItem = (category: string, index: number) => {
    return (
      <Pressable
        onPress={() => {
          if (onCategorySelect) {
            onCategorySelect(category);
          }
        }}
        key={index}
        className={`p-4 flex items-center justify-center rounded-xl mr-4 ${
          category === selectedCategory ? "bg-primary" : "bg-gray-200"
        }`}
      >
        <AppText
          className={`text-sm font-outfit-regular ${category === selectedCategory ? "text-white" : "text-gray-800"}`}
        >
          {category}
        </AppText>
      </Pressable>
    );
  };
  return (
    <View>
      <FlatList
        data={CLOTH_CATEGORIES}
        renderItem={({ item, index }) => renderCategoryItem(item, index)}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductCategoryTab;
