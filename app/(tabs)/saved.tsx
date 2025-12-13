import AppText from "@/components/ui/AppText";
import HeaderComponent from "@/components/ui/HeaderComponent";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NoSavedItem = () => {
  return (
    <View className="flex-1 flex items-center justify-center gap-y-3 p-5">
      <FontAwesome name="heart" size={64} color="#c3c3c3" className="mb-3" />
      <AppText className="text-xl font-outfit-semibold">
        No Saved Items!
      </AppText>
      <AppText className="text-base text-secondary text-center">
        You don&apos;t have any saved items. Go to home and add some. We&apos;ll
        alert you when something cool happens.
      </AppText>
    </View>
  );
};

const SavedScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-5">
        <HeaderComponent title="Saved Items" />
      </View>

      <View className="px-3 py-4 flex-1">
        {/* <ProductView /> */}
        <NoSavedItem />
      </View>
    </SafeAreaView>
  );
};

export default SavedScreen;
