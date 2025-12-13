import AppText from "@/components/ui/AppText";
import HeaderComponent from "@/components/ui/HeaderComponent";
import PopupModal from "@/components/ui/PopupModal";
import { useAuthStore } from "@/store";
import { FontAwesome5 } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountScreen = () => {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleLogout = () => {
    setLogoutModalVisible(true);
  };

  const confirmLogout = () => {
    setLogoutModalVisible(false);
    logout();
  };
  return (
    <View className="bg-stroke">
      <SafeAreaView className="bg-white -mb-10" />
      {/* Header */}
      <View className="px-5 bg-white">
        <View className="border-b border-b-stroke">
          <HeaderComponent title="Account" />
        </View>
      </View>

      <Pressable
        onPress={() => {
          router.push("/orders/my-orders");
        }}
      >
        <View className="px-5 flex flex-row items-center justify-between bg-white">
          <View className="py-7 flex flex-row items-center gap-x-3">
            <Feather name="box" size={24} color="black" />
            <AppText>My Orders</AppText>
          </View>

          <Feather name="chevron-right" size={24} color="#808080" />
        </View>
      </Pressable>

      <View className="my-3">
        <Pressable
          onPress={() => {
            router.push("/profile/my-details");
          }}
        >
          <View className="px-5 flex flex-row items-center justify-between bg-white">
            <View className="py-5 flex flex-row items-center gap-x-3">
              <FontAwesome name="address-card-o" size={20} color="black" />
              <AppText>My Details</AppText>
            </View>
            <Feather name="chevron-right" size={24} color="#808080" />
          </View>
        </Pressable>

        <Pressable onPress={() => router.push("/address")}>
          <View className="px-5 flex flex-row items-center justify-between bg-white">
            <View className="py-5 flex flex-row items-center gap-x-3">
              <Feather name="home" size={24} color="black" />
              <AppText>Address Book</AppText>
            </View>

            <Feather name="chevron-right" size={24} color="#808080" />
          </View>
        </Pressable>
        <View className="px-5 flex flex-row items-center justify-between bg-white">
          <View className="py-5 flex flex-row items-center gap-x-3">
            <FontAwesome name="credit-card" size={22} color="black" />
            <AppText>Payment Methods</AppText>
          </View>

          <Feather name="chevron-right" size={24} color="#808080" />
        </View>
        <Pressable onPress={() => router.push("/profile/notifications")}>
          <View className="px-5 flex flex-row items-center justify-between bg-white">
            <View className="py-5 flex flex-row items-center gap-x-3">
              <Feather name="bell" size={22} color="black" />
              <AppText>Notifications</AppText>
            </View>

            <Feather name="chevron-right" size={24} color="#808080" />
          </View>
        </Pressable>
      </View>

      <View className="mb-3">
        <Link href={"https://xelabyte.vercel.app"} asChild>
          <Pressable>
            <View className="px-5 flex flex-row items-center justify-between bg-white">
              <View className="py-5 flex flex-row items-center gap-x-3">
                <AntDesign name="question-circle" size={20} color="black" />
                <AppText>FAQs</AppText>
              </View>
              <Feather name="chevron-right" size={24} color="#808080" />
            </View>
          </Pressable>
        </Link>
        <Link href={"https://xelabyte.vercel.app"} asChild>
          <Pressable>
            <View className="px-5 flex flex-row items-center justify-between bg-white">
              <View className="py-5 flex flex-row items-center gap-x-3">
                <FontAwesome5 name="headset" size={20} color="black" />
                <AppText>Customer Support</AppText>
              </View>

              <Feather name="chevron-right" size={24} color="#808080" />
            </View>
          </Pressable>
        </Link>
      </View>

      <View className="h-1/2 bg-white">
        <Pressable onPress={handleLogout}>
          <View className="px-5 flex flex-row items-center justify-between bg-white">
            <View className="py-5 flex flex-row items-center gap-x-3">
              <Feather name="log-out" size={22} color="red" />
              <AppText className="text-red-500">Logout</AppText>
            </View>

            <Feather name="chevron-right" size={24} color="#808080" />
          </View>
        </Pressable>
      </View>

      <PopupModal
        visible={logoutModalVisible}
        onClose={() => setLogoutModalVisible(false)}
        title="Logout"
        description="Are you sure you want to logout?"
        variant="destructive"
        primaryAction={{
          label: "Logout",
          onPress: confirmLogout,
        }}
        secondaryAction={{
          label: "Cancel",
          onPress: () => setLogoutModalVisible(false),
        }}
      />
    </View>
  );
};

export default AccountScreen;
