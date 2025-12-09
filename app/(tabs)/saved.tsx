import HeaderComponent from "@/components/ui/HeaderComponent";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const SavedScreen = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-5">
        <HeaderComponent title="Saved Items" />
      </View>
    </SafeAreaView>
  );
};

export default SavedScreen;
