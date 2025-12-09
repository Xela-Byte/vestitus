import { sizeBlock } from "@/styles/universalStyle";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "#808080",
        tabBarActiveTintColor: "#1A1A1A",
        tabBarBackground: () => (
          <BlurView
            intensity={15}
            style={{
              ...StyleSheet.absoluteFillObject,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              overflow: "hidden",
              backgroundColor: "transparent",
            }}
          />
        ),
        tabBarStyle: {
          height: sizeBlock.getHeightSize(85),
          paddingTop: sizeBlock.getHeightSize(20),
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderTopColor: "rgba(255, 255, 255, 0.2)",
          borderTopWidth: 1,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color }) => (
            <Feather name="heart" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <Feather name="shopping-cart" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
