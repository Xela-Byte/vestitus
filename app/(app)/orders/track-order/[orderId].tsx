import MapPicker from "@/components/address/MapPicker";
import OrderTrackingBottomSheet from "@/components/order/OrderTrackingBottomSheet";
import AppButton from "@/components/ui/AppButton";
import HeaderComponent from "@/components/ui/HeaderComponent";
import type { Order } from "@/types/order";
import { mockOrder } from "@/utils/data/orders";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TrackOrder = () => {
  const { orderId } = useLocalSearchParams<{ orderId: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(true);

  // Mock order data - replace with API call
  useEffect(() => {
    setOrder(mockOrder);
  }, [orderId]);

  const handleLeaveReview = () => {};

  return (
    <>
      <SafeAreaView className="flex-1 bg-white">
        {/* Header */}
        <View className="px-5 pb-3">
          <HeaderComponent title="Track Order" />
        </View>

        {/* Map Picker - shows current package location */}
        {order && <MapPicker />}

        {/* Review Button */}
        <View className="px-5 pt-6">
          {order?.review ? (
            <AppButton
              variant="outline"
              label={`★ ${order.review.rating}/5`}
              icon={
                <MaterialCommunityIcons name="star" size={16} color="#1A1A1A" />
              }
              className="w-full"
              disabled
            />
          ) : (
            <AppButton
              label="Leave a Review"
              className="w-full"
              onPress={handleLeaveReview}
            />
          )}
        </View>
      </SafeAreaView>

      {/* Order Tracking Bottom Sheet - shows automatically */}
      <OrderTrackingBottomSheet
        visible={bottomSheetVisible}
        order={order}
        onClose={() => {
          router.back();
          setBottomSheetVisible(false);
        }}
      />
    </>
  );
};

export default TrackOrder;
