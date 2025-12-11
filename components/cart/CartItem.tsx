import Shirt from "@/assets/images/shirt.jpg";
import { borderRadius, sizeBlock } from "@/styles/universalStyle";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";
import AppText from "../ui/AppText";

type Props = {};

const CartItem = (props: Props) => {
  return (
    <View className="bg-[#efecec] rounded-xl px-3 py-5 flex flex-row items-start justify-between">
      <Image
        source={Shirt}
        style={{
          width: sizeBlock.getWidthSize(70),
          height: sizeBlock.getHeightSize(70),
          borderRadius: borderRadius.small,
        }}
      />

      <View className="flex-1 flex flex-col">
        <View className="flex-1 flex flex-row items-start">
          <View className="flex-1 flex px-4">
            <AppText className="font-outfit-semibold text-base">
              Regular Fit Slogan
            </AppText>
            <AppText variant="caption" className="text-sm">
              Size L
            </AppText>
          </View>

          <MaterialCommunityIcons
            name="delete-forever-outline"
            size={24}
            color="#ED1010"
          />
        </View>

        <View className="flex flex-row items-center pl-5 justify-between">
          <AppText>$1,299</AppText>

          <View className="flex flex-row items-center gap-3 px-3 py-1 rounded-lg">
            <View className="w-7 h-7 flex items-center justify-center bg-[#ffffff95] rounded-md">
              <MaterialCommunityIcons name="minus" size={20} color="#000000" />
            </View>
            <View className="w-7 h-7 flex items-center justify-center bg-[#ffffff95] rounded-md">
              <AppText className="font-outfit-semibold text-base">1</AppText>
            </View>
            <View className="w-7 h-7 flex items-center justify-center bg-[#ffffff95] rounded-md">
              <MaterialCommunityIcons name="plus" size={20} color="#000000" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
