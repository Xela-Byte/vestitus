import NotifeeBell from "@/components/notification/NotifeeBell";
import ProductCategoryTab from "@/components/product/ProductCategoryTab";
import ProductView from "@/components/product/ProductView";
import FilterSearch from "@/components/search/FilterSearch";
import AppText from "@/components/ui/AppText";
import SearchInput from "@/components/ui/SearchInput";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
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
            value={searchText}
            onSearchChange={(text) => {
              setSearchText(text);
            }}
          />
        </View>

        <FilterSearch />
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
