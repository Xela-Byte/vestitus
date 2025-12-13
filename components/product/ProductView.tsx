import { Product } from "@/types/product";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Link } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";
import ProductCard from "./ProductCard";

const ProductView = () => {
  const bottomTabBarheight = useBottomTabBarHeight();

  // Generate mock clothing data
  const mockClothes: Product[] = [
    {
      id: "product-1",
      name: "Classic White T-Shirt",
      price: 29.99,
      discountPercent: 10,
      description: "A classic white t-shirt perfect for any occasion",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: "product-2",
      name: "Slim Fit Blue Jeans",
      price: 79.99,
      discountPercent: 15,
      description: "Comfortable slim fit blue jeans",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: "product-3",
      name: "Wool Blend Sweater",
      price: 89.99,
      discountPercent: 20,
      description: "Warm and cozy wool blend sweater",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: "product-4",
      name: "Casual Black Hoodie",
      price: 59.99,
      discountPercent: 5,
      description: "Casual black hoodie for everyday wear",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: "product-5",
      name: "Summer Floral Dress",
      price: 65.99,
      discountPercent: 12,
      description: "Beautiful summer floral dress",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: "product-6",
      name: "Athletic Running Shoes",
      price: 119.99,
      discountPercent: 8,
      description: "High-performance athletic running shoes",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: "product-7",
      name: "Leather Belt Brown",
      price: 45.99,
      discountPercent: 0,
      description: "Premium brown leather belt",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: "product-8",
      name: "Cotton Polo Shirt",
      price: 49.99,
      discountPercent: 0,
      description: "Classic cotton polo shirt",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: "product-9",
      name: "Denim Jacket Dark",
      price: 99.99,
      discountPercent: 25,
      description: "Stylish dark denim jacket",
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: "product-10",
      name: "White Sneakers",
      price: 85.99,
      discountPercent: 65,
      description: "Comfortable white sneakers",
      imageUrl: "https://via.placeholder.com/300",
    },
  ];

  const handleSaveToggle = (productId: string) => {};

  const getSavedStatus = (productId: string) => {
    return false;
  };

  return (
    <View className="w-full">
      <FlatList
        style={{
          width: "100%",
          height: "85%",
        }}
        contentContainerStyle={{
          paddingBottom: bottomTabBarheight + 20,
        }}
        numColumns={2}
        data={mockClothes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Link href={`/product/${item.id}`} className="w-1/2 pb-16 px-2">
              <ProductCard
                isSaved={getSavedStatus(item.id)}
                onSaveToggle={() => handleSaveToggle(item.id)}
                item={item}
              />
            </Link>
          );
        }}
      />
    </View>
  );
};

export default ProductView;
