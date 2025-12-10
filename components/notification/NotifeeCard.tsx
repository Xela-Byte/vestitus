import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View } from "react-native";
import AppText from "../ui/AppText";

export type NotificationType =
  | "discount"
  | "wallet"
  | "location"
  | "payment"
  | "profile";

interface NotificationData {
  type: NotificationType;
  title?: string;
  subtitle?: string;
  timestamp?: string | Date;
}

type Props = NotificationData;

const notificationConfig: Record<
  NotificationType,
  { icon: React.ReactNode; defaultTitle: string; defaultSubtitle: string }
> = {
  discount: {
    icon: <Entypo name="price-tag" size={25} color="#808080" />,
    defaultTitle: "25% Special Discount!",
    defaultSubtitle: "Special promotion only valid today.",
  },
  wallet: {
    icon: <Entypo name="wallet" size={25} color="#808080" />,
    defaultTitle: "25% Special Discount!",
    defaultSubtitle: "Special promotion only valid today.",
  },
  location: {
    icon: <Entypo name="location-pin" size={25} color="#808080" />,
    defaultTitle: "25% Special Discount!",
    defaultSubtitle: "Special promotion only valid today.",
  },
  payment: {
    icon: <Entypo name="credit-card" size={25} color="#808080" />,
    defaultTitle: "25% Special Discount!",
    defaultSubtitle: "Special promotion only valid today.",
  },
  profile: {
    icon: <Ionicons name="person-circle" size={25} color="#808080" />,
    defaultTitle: "25% Special Discount!",
    defaultSubtitle: "Special promotion only valid today.",
  },
};

const NotifeeCard = ({
  type = "discount",
  title,
  subtitle,
  timestamp,
}: Props) => {
  const config = notificationConfig[type];

  return (
    <View className="flex flex-row items-start gap-x-3 ">
      {config.icon}
      <View className="px-2 pb-4 w-full border-b border-stroke">
        <AppText variant="h4">{title || config.defaultTitle}</AppText>
        <AppText variant="caption" className="text-secondary">
          {subtitle || config.defaultSubtitle}
        </AppText>
      </View>
    </View>
  );
};

export default NotifeeCard;
