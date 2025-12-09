import { sizeBlock } from "@/styles/universalStyle";
import ArrowLeft from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import AppText from "./AppText";

type Props = {
  title?: string;
  onPress?: () => void;
  extraComponent?: any;
  showArrow?: boolean;
};

const HeaderComponent = ({
  onPress,
  title,
  extraComponent,
  showArrow = true,
}: Props) => {
  const router = useRouter();

  if (!router.canGoBack()) {
    return null;
  }

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.back();
    }
  };

  return (
    <View className="flex flex-row items-center w-screen py-[calc(100vw*0.05)]">
      {showArrow && (
        <Pressable onPress={handlePress}>
          <ArrowLeft
            name="chevron-with-circle-left"
            size={sizeBlock.getWidthSize(30)}
            color="#1a1a1a"
          />
        </Pressable>
      )}
      {title && (
        <View className="w-[calc(100vw*0.8)] flex flex-row items-center justify-center">
          <AppText
            className={`text-primary text-lg ${!title ? "opacity-50" : "opacity-100"}`}
            variant="h3"
          >
            {title}
          </AppText>
        </View>
      )}
      {extraComponent && extraComponent}
    </View>
  );
};

export default HeaderComponent;
