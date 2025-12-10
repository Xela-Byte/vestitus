import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { FlatList, Pressable, View } from "react-native";
import AppText from "../ui/AppText";

type Props = {};

type SearchItemProps = {
  text: string;
  onDelete: () => void;
  onSearchTermSelect: () => void;
};

const SearchItem = ({
  text,
  onDelete,
  onSearchTermSelect,
}: SearchItemProps) => {
  return (
    <Pressable onPress={onSearchTermSelect}>
      <View className="flex flex-row items-center justify-between py-4 border-b border-gray-200">
        <AppText variant="body">{text}</AppText>
        <Pressable onPress={onDelete}>
          <AntDesign name="close-circle" size={20} color="#808080" />
        </Pressable>
      </View>
    </Pressable>
  );
};

const RecentSearch = (props: Props) => {
  const handleDelete = (item: string) => {
    console.log("====================================");
    console.log(item);
    console.log("====================================");
  };

  const handleSearchTermSelect = (item: string) => {
    console.log("====================================");
    console.log("Selected:", item);
    console.log("====================================");
  };
  return (
    <View className="py-5">
      <View className="flex flex-row items-center justify-between">
        <AppText variant="h4">Recent Searches</AppText>
        <AppText variant="caption" className="underline">
          Clear all
        </AppText>
      </View>

      <View className="mt-4">
        <FlatList
          data={["jeans", "t-shirt", "sneakers", "jacket", "hat"]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <SearchItem
              text={item}
              onSearchTermSelect={() => handleSearchTermSelect(item)}
              onDelete={() => handleDelete(item)}
            />
          )}
          ItemSeparatorComponent={() => <View className="h-2" />}
        />
      </View>
    </View>
  );
};

export default RecentSearch;
