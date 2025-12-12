import AppText from "@/components/ui/AppText";
import HeaderComponent from "@/components/ui/HeaderComponent";
import { FontAwesome5 } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = Record<string, never>;

const AccountScreen = (props: Props) => {
  return (
    <View className="bg-stroke">
      <SafeAreaView className="bg-white" />
      {/* Header */}
      <View className="px-5 bg-white">
        <View className="border-b border-b-stroke">
          <HeaderComponent title="Account" />
        </View>
      </View>

      <View className="px-5 flex flex-row items-center justify-between bg-white">
        <View className="py-7 flex flex-row items-center gap-x-3">
          <Feather name="box" size={24} color="black" />
          <AppText>My Orders</AppText>
        </View>

        <Feather name="chevron-right" size={24} color="#808080" />
      </View>

      <View className="my-3">
        <View className="px-5 flex flex-row items-center justify-between bg-white">
          <View className="py-5 flex flex-row items-center gap-x-3">
            <FontAwesome name="address-card-o" size={20} color="black" />
            <AppText>My Details</AppText>
          </View>
          <Feather name="chevron-right" size={24} color="#808080" />
        </View>
        <View className="px-5 flex flex-row items-center justify-between bg-white">
          <View className="py-5 flex flex-row items-center gap-x-3">
            <Feather name="home" size={24} color="black" />
            <AppText>My Address</AppText>
          </View>

          <Feather name="chevron-right" size={24} color="#808080" />
        </View>
        <View className="px-5 flex flex-row items-center justify-between bg-white">
          <View className="py-5 flex flex-row items-center gap-x-3">
            <FontAwesome name="credit-card" size={22} color="black" />
            <AppText>Payment Methods</AppText>
          </View>

          <Feather name="chevron-right" size={24} color="#808080" />
        </View>
        <View className="px-5 flex flex-row items-center justify-between bg-white">
          <View className="py-5 flex flex-row items-center gap-x-3">
            <Feather name="bell" size={22} color="black" />
            <AppText>Notifications</AppText>
          </View>

          <Feather name="chevron-right" size={24} color="#808080" />
        </View>
      </View>

      <View className="mb-3">
        <View className="px-5 flex flex-row items-center justify-between bg-white">
          <View className="py-5 flex flex-row items-center gap-x-3">
            <AntDesign name="question-circle" size={20} color="black" />
            <AppText>FAQs</AppText>
          </View>
          <Feather name="chevron-right" size={24} color="#808080" />
        </View>
        <View className="px-5 flex flex-row items-center justify-between bg-white">
          <View className="py-5 flex flex-row items-center gap-x-3">
            <FontAwesome5 name="headset" size={20} color="black" />
            <AppText>Customer Support</AppText>
          </View>

          <Feather name="chevron-right" size={24} color="#808080" />
        </View>
      </View>

      <View className="h-1/2 bg-white">
        <View className="px-5 flex flex-row items-center justify-between bg-white">
          <View className="py-5 flex flex-row items-center gap-x-3">
            <Feather name="log-out" size={22} color="red" />
            <AppText className="text-red-500">Logout</AppText>
          </View>

          <Feather name="chevron-right" size={24} color="#808080" />
        </View>
      </View>
    </View>
  );
};

export default AccountScreen;
