import CartItem from "@/components/cart/CartItem";
import AppButton from "@/components/ui/AppButton";
import AppText from "@/components/ui/AppText";
import HeaderComponent from "@/components/ui/HeaderComponent";
import { useDeviceType } from "@/hooks";
import { sizeBlock } from "@/styles/universalStyle";
import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CartScreen = () => {
  const router = useRouter();
  const isTablet = useDeviceType() === "tablet";
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-5">
        <HeaderComponent title="My Cart" />
      </View>

      {/* <NoCartItem /> */}
      <FlatList
        key={`${isTablet}`}
        contentContainerClassName="gap-4 flex px-5 pb-24"
        data={[1, 2, 3, 4, 5]}
        numColumns={isTablet ? 2 : 1}
        renderItem={({ item }) => {
          return <CartItem />;
        }}
        ListFooterComponent={
          <View className="pb-5">
            {/* Information */}
            <View className="py-5 gap-y-2 border-b border-stroke">
              <View className="flex flex-row items-center justify-between">
                <AppText className="text-secondary">Sub-total</AppText>
                <AppText variant="h4">$1,900</AppText>
              </View>
              <View className="flex flex-row items-center justify-between">
                <AppText className="text-secondary">VAT (%)</AppText>
                <AppText variant="h4">$0.00</AppText>
              </View>
              <View className="flex flex-row items-center justify-between">
                <AppText className="text-secondary">Shipping fee</AppText>
                <AppText variant="h4">$80</AppText>
              </View>
            </View>

            <View className="flex flex-row items-center justify-between pt-5">
              <AppText className="text-secondary">Sub-total</AppText>
              <AppText variant="h4">$1,900</AppText>
            </View>

            <AppButton
              label="Go to Checkout"
              className="mt-7"
              iconPosition="right"
              onPress={() => {
                router.push("/checkout");
              }}
              icon={
                <FontAwesome6
                  style={{
                    transform: [{ rotate: "45deg" }],
                    marginLeft: sizeBlock.getWidthSize(5),
                  }}
                  name="arrow-up-long"
                  size={24}
                  color="white"
                />
              }
            />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default CartScreen;
