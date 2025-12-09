import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import ProductCard from "./ProductCard";

type Props = {};

type Product = {
  id: string;
  name: string;
  price: number;
  isSaved: boolean;
};

const ProductView = (props: Props) => {
  const bottomTabBarheight = useBottomTabBarHeight();

  // Generate mock clothing data
  const mockClothes: Product[] = [
    {
      id: "product-1",
      name: "Classic White T-Shirt",
      price: 29.99,
      isSaved: false,
    },
    {
      id: "product-2",
      name: "Slim Fit Blue Jeans",
      price: 79.99,
      isSaved: false,
    },
    {
      id: "product-3",
      name: "Wool Blend Sweater",
      price: 89.99,
      isSaved: false,
    },
    {
      id: "product-4",
      name: "Casual Black Hoodie",
      price: 59.99,
      isSaved: false,
    },
    {
      id: "product-5",
      name: "Summer Floral Dress",
      price: 65.99,
      isSaved: false,
    },
    {
      id: "product-6",
      name: "Athletic Running Shoes",
      price: 119.99,
      isSaved: false,
    },
    {
      id: "product-7",
      name: "Leather Belt Brown",
      price: 45.99,
      isSaved: false,
    },
    {
      id: "product-8",
      name: "Cotton Polo Shirt",
      price: 49.99,
      isSaved: false,
    },
    {
      id: "product-9",
      name: "Denim Jacket Dark",
      price: 99.99,
      isSaved: false,
    },
    { id: "product-10", name: "White Sneakers", price: 85.99, isSaved: false },
  ];

  const [products, setProducts] = useState(mockClothes);

  const handleSaveToggle = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isSaved: !product.isSaved }
          : product
      )
    );
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
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity activeOpacity={0.7} className="w-1/2 pb-16 px-2">
              <ProductCard
                isSaved={item.isSaved}
                onSaveToggle={() => handleSaveToggle(item.id)}
                name={item.name}
                price={item.price}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ProductView;
