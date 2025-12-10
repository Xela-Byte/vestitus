import Shirt from "@/assets/images/shirt.jpg";
import { borderRadius, sizeBlock } from "@/styles/universalStyle";
import { Product } from "@/types/product";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Image } from "expo-image";
import React from "react";
import { FlatList, Pressable, View } from "react-native";
import AppText from "../ui/AppText";

type Props = Record<string, never>;

type ResultItemProps = {
  item: Product;
  onProductSelect: () => void;
};

const NoSearchResult = (props: Props) => {
  return (
    <View className="flex-1 flex items-center justify-center gap-y-1">
      <FontAwesome name="search" size={64} color="#c3c3c3" className="mb-3" />
      <AppText className="text-xl font-outfit-semibold">
        You haven&apos;t gotten any notifications yet!
      </AppText>
      <AppText className="text-base text-secondary">
        We&apos;ll alert you when something cool happens.
      </AppText>
    </View>
  );
};

const ResultItem = ({ item, onProductSelect }: ResultItemProps) => {
  return (
    <Pressable onPress={onProductSelect}>
      <View className="flex flex-row items-center justify-between p-4 border-b border-gray-200">
        <View className="flex flex-row items-center gap-x-4">
          <Image
            source={item.imageUrl ? { uri: item.imageUrl } : Shirt}
            style={{
              width: sizeBlock.getWidthSize(50),
              height: sizeBlock.getWidthSize(50),
              borderRadius: borderRadius.small,
            }}
          />
          <View>
            <AppText
              weight="semibold"
              className={`mt-3 font-outfit-semibold text-base`}
              numberOfLines={1}
            >
              {item.name}
            </AppText>

            <AppText
              weight="medium"
              className={`text-xs font-outfit-medium text-secondary`}
              numberOfLines={1}
            >
              ${item.price.toFixed(2)}{" "}
              {item.discountPercent > 0 && (
                <AppText weight="semibold" className="text-red-400">
                  -{item.discountPercent}%
                </AppText>
              )}
            </AppText>
          </View>
        </View>

        <FontAwesome6
          style={{
            transform: [{ rotate: "45deg" }],
          }}
          name="arrow-up-long"
          size={24}
          color="black"
        />
      </View>
    </Pressable>
  );
};

const MOCK_SEARCHES: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    description: "A timeless white t-shirt made from 100% cotton.",
    price: 19.99,
    discountPercent: 10,
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "2",
    name: "Blue Denim Jeans",
    description: "Comfortable blue denim jeans with a modern fit.",
    price: 49.99,
    discountPercent: 15,
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "3",
    name: "Red Running Shoes",
    description: "Lightweight running shoes designed for performance.",
    price: 89.99,
    discountPercent: 20,
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const SearchResult = (props: Props) => {
  const handleDelete = (item: string) => {
    console.log("====================================");
    console.log(item);
    console.log("====================================");
  };
  return (
    <View className="py-5">
      <View className="flex flex-row items-center justify-between px-1">
        <AppText variant="h4">Recent Searches</AppText>
        <AppText variant="caption" className="underline">
          Clear all
        </AppText>
      </View>

      <View className="mt-4 h-[55vh]">
        <FlatList
          data={MOCK_SEARCHES.concat(MOCK_SEARCHES)
            .concat(MOCK_SEARCHES)
            .concat(MOCK_SEARCHES)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ResultItem
              item={item}
              onProductSelect={() => handleDelete(item.id)}
            />
          )}
          ItemSeparatorComponent={() => <View className="h-2" />}
          ListEmptyComponent={<NoSearchResult />}
        />
      </View>
    </View>
  );
};

export default SearchResult;
