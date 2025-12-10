import FilterIcon from "@/assets/icons/filter.svg";
import NotifeeBell from "@/components/notification/NotifeeBell";
import ProductCategoryTab from "@/components/product/ProductCategoryTab";
import ProductView from "@/components/product/ProductView";
import AppText from "@/components/ui/AppText";
import SearchInput from "@/components/ui/SearchInput";
import { useState } from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};
// https://github.com/jamsch/expo-speech-recognition
const HomeScreen = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="p-5">
        <View className="flex flex-row items-center justify-between py-3">
          <AppText weight="semibold" variant="h2">
            Discover
          </AppText>
          <NotifeeBell />
        </View>
      </View>

      {/* Search */}
      <View className="px-5 flex flex-row items-center justify-between gap-x-5 mb-4">
        <View className="flex-1">
          <SearchInput
            placeholder="Search products..."
            onSearchChange={(text) => {}}
            onMicPress={() => {}}
          />
        </View>

        <Pressable className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
          <FilterIcon />
        </Pressable>
      </View>

      <View className="px-5 py-4">
        <ProductCategoryTab
          selectedCategory={selectedCategory}
          onCategorySelect={(category) => {
            handleCategorySelect(category);
          }}
        />
      </View>

      <View className="px-3 py-4">
        <ProductView />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
