import OrderCard from "@/components/order/OrderCard";
import AppText from "@/components/ui/AppText";
import HeaderComponent from "@/components/ui/HeaderComponent";
import { Order } from "@/types/order";
import Feather from "@expo/vector-icons/Feather";
import React, { useMemo, useState } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Mock data - replace with real API call
const MOCK_ORDERS: Order[] = [
  {
    id: "1",
    orderNumber: "VES001234",
    status: "delivered",
    items: [
      {
        id: "1",
        productName: "Regular Fit Slogan T-Shirt",
        price: 1299,
        quantity: 2,
        imageUrl: "",
        size: "L",
      },
    ],
    totalAmount: 2598,
    createdAt: new Date("2025-12-10"),
    estimatedDelivery: new Date("2025-12-15"),
  },
  {
    id: "2",
    orderNumber: "VES001233",
    status: "shipped",
    items: [
      {
        id: "1",
        productName: "Classic Blue Denim",
        price: 3499,
        quantity: 1,
        imageUrl: "",
        size: "M",
      },
      {
        id: "2",
        productName: "White Sports Shoe",
        price: 4999,
        quantity: 1,
        imageUrl: "",
      },
    ],
    totalAmount: 8498,
    createdAt: new Date("2025-12-08"),
    estimatedDelivery: new Date("2025-12-18"),
  },
  {
    id: "3",
    orderNumber: "VES001232",
    status: "pending",
    items: [
      {
        id: "1",
        productName: "Summer Casual Shirt",
        price: 2199,
        quantity: 1,
        imageUrl: "",
        size: "XL",
      },
    ],
    totalAmount: 2199,
    createdAt: new Date("2025-12-11"),
  },
  {
    id: "4",
    orderNumber: "VES001231",
    status: "delivered",
    items: [
      {
        id: "1",
        productName: "Comfortable Hoodie",
        price: 3899,
        quantity: 1,
        imageUrl: "",
        size: "M",
      },
    ],
    totalAmount: 3899,
    createdAt: new Date("2025-11-28"),
    estimatedDelivery: new Date("2025-12-05"),
  },
];

const filterOptions = [
  { id: "all", label: "All Orders" },
  { id: "pending", label: "Pending" },
  { id: "shipped", label: "Shipped" },
  { id: "delivered", label: "Delivered" },
  { id: "cancelled", label: "Cancelled" },
];

const renderEmptyState = (selectedFilter: string) => (
  <View className="flex-1 flex items-center justify-center px-5">
    <Feather name="inbox" size={64} color="#CCC" />
    <AppText variant="h3" className="mt-4 font-outfit-semibold">
      No Orders Found
    </AppText>
    <AppText variant="body" className="text-center text-secondary mt-2">
      You haven&apos;t placed any{" "}
      {selectedFilter !== "all" ? selectedFilter : ""} orders yet.
    </AppText>
  </View>
);

const MyOrdersScreen = () => {
  const [orders] = useState<Order[]>(MOCK_ORDERS);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredOrders = useMemo(() => {
    return orders.filter((order) =>
      selectedFilter === "all" ? true : order.status === selectedFilter
    );
  }, [orders, selectedFilter]);

  return (
    <View className="flex-1 bg-[#F5F5F5]">
      <SafeAreaView className="bg-white" />

      {/* Header */}
      <View className="px-5 bg-white">
        <View className="border-b border-b-stroke">
          <HeaderComponent title="My Orders" />
        </View>
      </View>

      {/* Filter Tabs */}
      <View className="bg-white px-5 py-4 border-b border-b-stroke">
        <FlatList
          horizontal
          data={filterOptions}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
          renderItem={({ item }) => (
            <View
              className={`px-4 py-2 rounded-full border ${
                selectedFilter === item.id
                  ? "bg-black border-black"
                  : "bg-transparent border-stroke"
              }`}
              onTouchEnd={() => setSelectedFilter(item.id)}
            >
              <AppText
                className={`font-outfit-medium text-sm ${
                  selectedFilter === item.id ? "text-white" : "text-secondary"
                }`}
              >
                {item.label}
              </AppText>
            </View>
          )}
        />
      </View>

      {/* Orders List */}
      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderCard order={item} />}
        contentContainerStyle={{
          padding: 16,
          flexGrow: 1,
        }}
        ListEmptyComponent={renderEmptyState(selectedFilter)}
      />
    </View>
  );
};

export default MyOrdersScreen;
