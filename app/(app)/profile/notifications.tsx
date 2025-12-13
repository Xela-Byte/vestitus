import AppText from "@/components/ui/AppText";
import HeaderComponent from "@/components/ui/HeaderComponent";
import React, { useState } from "react";
import { ScrollView, Switch, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const notificationItems = [
  { id: "general", label: "General Notifications" },
  { id: "sound", label: "Sound" },
  { id: "vibrate", label: "Vibrate" },
  { id: "specialOffers", label: "Special Offers" },
  { id: "promoDiscounts", label: "Promo & Discounts" },
  { id: "payments", label: "Payments" },
  { id: "cashback", label: "Cahback" },
  { id: "appUpdates", label: "App Updates" },
  { id: "newService", label: "New Service Available" },
  { id: "newTips", label: "New Tips Available" },
] as const;

type NotificationId = (typeof notificationItems)[number]["id"];

type NotificationSettings = {
  general: boolean;
  sound: boolean;
  vibrate: boolean;
  specialOffers: boolean;
  promoDiscounts: boolean;
  payments: boolean;
  cashback: boolean;
  appUpdates: boolean;
  newService: boolean;
  newTips: boolean;
};

const initialState: NotificationSettings = {
  general: true,
  sound: true,
  vibrate: true,
  specialOffers: true,
  promoDiscounts: true,
  payments: true,
  cashback: true,
  appUpdates: true,
  newService: true,
  newTips: true,
};

type Props = {};

const Notifications = (props: Props) => {
  const [settings, setSettings] = useState<NotificationSettings>(initialState);

  const handleToggle = (id: NotificationId) => {
    setSettings((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-5 pb-3">
        <HeaderComponent title="Notifications" />
      </View>

      <ScrollView className="flex-1 px-4 py-6">
        <View className="gap-4">
          {notificationItems.map(({ id, label }) => (
            <View
              key={id}
              className="flex-row items-center justify-between px-4 py-3 bg-gray-50 rounded-lg"
            >
              <AppText variant="body">{label}</AppText>
              <Switch
                value={settings[id]}
                onValueChange={() => handleToggle(id as NotificationId)}
                trackColor={{ false: "#e5e5e5", true: "#1A1A1A" }}
                thumbColor={settings[id] ? "#ffffff" : "#f0f0f0"}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
