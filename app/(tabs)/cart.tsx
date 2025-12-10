import NoCartItems from "@/components/cart/NoCartItems";
import HeaderComponent from "@/components/ui/HeaderComponent";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = Record<string, never>;

const CartScreen = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-5">
        <HeaderComponent title="My Cart" />
      </View>

      <View className="flex-1 items-center justify-center">
        <NoCartItems />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
