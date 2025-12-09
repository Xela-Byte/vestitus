import AppText from "@/components/ui/AppText";
import Feather from "@expo/vector-icons/Feather";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};
// https://github.com/jamsch/expo-speech-recognition
const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView className="flex-1">
      <View className="p-5">
        <View className="flex flex-row items-center justify-between">
          <AppText variant="h2">Discover</AppText>
          <Feather name="bell" size={24} color="#1a1a1a" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
