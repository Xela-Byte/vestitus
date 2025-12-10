import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { View } from "react-native";
import AppText from "../ui/AppText";

type Props = Record<string, never>;

const NoNotification = (props: Props) => {
  return (
    <View className="flex-1 flex items-center justify-center gap-y-1">
      <FontAwesome name="bell" size={64} color="#c3c3c3" className="mb-3" />
      <AppText className="text-xl font-outfit-semibold">
        You haven&apos;t gotten any notifications yet!
      </AppText>
      <AppText className="text-base text-secondary">
        We&apos;ll alert you when something cool happens.
      </AppText>
    </View>
  );
};

export default NoNotification;
