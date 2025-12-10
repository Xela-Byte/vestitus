import FilterSearch from "@/components/search/FilterSearch";
import HeaderComponent from "@/components/ui/HeaderComponent";
import SearchInput from "@/components/ui/SearchInput";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = Record<string, never>;

const SearchScreen = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-5">
        <HeaderComponent title="Search" />
      </View>

      <View className="px-5 flex flex-row items-center justify-between gap-x-5 mb-4">
        <View className="flex-1">
          <SearchInput
            placeholder="Search products..."
            onSearchChange={(text) => {}}
          />
        </View>

        <FilterSearch />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
