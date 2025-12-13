import AppText from "@/components/ui/AppText";
import { sizeBlock } from "@/styles/universalStyle";
import type { Order } from "@/types/order";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const { height } = Dimensions.get("window");

export interface OrderTrackingBottomSheetProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "pending":
      return "clock-outline";
    case "shipped":
      return "truck";
    case "delivered":
      return "check-circle";
    case "cancelled":
      return "close-circle";
    default:
      return "circle";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "#FFA500";
    case "shipped":
      return "#1A1A1A";
    case "delivered":
      return "#0C9409";
    case "cancelled":
      return "#EF4444";
    default:
      return "#808080";
  }
};

const getStatusLabel = (status: string) => {
  return status.charAt(0).toUpperCase() + status.slice(1);
};

const OrderTrackingBottomSheet: React.FC<OrderTrackingBottomSheetProps> = ({
  visible,
  order,
  onClose,
}) => {
  const panY = useRef(new Animated.Value(height)).current;

  // Animate bottom sheet in/out
  useEffect(() => {
    if (visible) {
      Animated.spring(panY, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(panY, {
        toValue: height,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [visible, panY]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dy: panY }], {
        useNativeDriver: false,
      }) as any,
      onPanResponderRelease: (_e, { dy }) => {
        if (dy > 100) {
          handleClose();
        } else {
          Animated.spring(panY, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  const handleClose = () => {
    Animated.timing(panY, {
      toValue: height,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      onClose();
    });
  };

  const panYInterpolate = panY.interpolate({
    inputRange: [0, height],
    outputRange: [0, height],
  });

  if (!order) return null;

  const statusColor = getStatusColor(order.status);
  const statusIcon = getStatusIcon(order.status);
  const activities = order.activities || [];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={handleClose}
    >
      <TouchableWithoutFeedback onPress={handleClose}>
        <View className="flex-1 bg-black/50" />
      </TouchableWithoutFeedback>

      <Animated.View
        style={{
          transform: [{ translateY: panYInterpolate }],
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        {...panResponder.panHandlers}
      >
        <View className="bg-white rounded-t-3xl pb-8 pt-4 px-6">
          {/* Handle bar */}
          <View className="flex-row justify-center mb-4">
            <View
              className="w-10 h-1 rounded-full"
              style={{ backgroundColor: "#E0E0E0" }}
            />
          </View>

          {/* Header */}
          <View className="flex-row justify-between items-center mb-6">
            <AppText variant="h3" className="font-outfit-semibold">
              Order Status
            </AppText>
            <TouchableOpacity onPress={handleClose}>
              <Ionicons name="close" size={24} color="#1A1A1A" />
            </TouchableOpacity>
          </View>

          {/* Current Status Card */}
          <View
            className="rounded-lg p-4 mb-6"
            style={{
              backgroundColor: "#F8F8F8",
              borderWidth: 1,
              borderColor: "#E0E0E0",
            }}
          >
            <View className="flex-row items-center mb-3">
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  backgroundColor: statusColor,
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 12,
                }}
              >
                <MaterialCommunityIcons
                  name={statusIcon as any}
                  size={24}
                  color="white"
                />
              </View>
              <View className="flex-1">
                <AppText className="font-outfit-semibold text-primary">
                  {getStatusLabel(order.status)}
                </AppText>
                {order.estimatedDelivery && (
                  <AppText className="text-secondary text-xs font-outfit-regular">
                    Est. Delivery:{" "}
                    {new Date(order.estimatedDelivery).toLocaleDateString()}
                  </AppText>
                )}
              </View>
            </View>

            {order.currentLocation && (
              <View className="flex-row items-center">
                <Ionicons
                  name="location"
                  size={14}
                  color="#808080"
                  style={{ marginRight: 4 }}
                />
                <AppText className="text-secondary text-xs font-outfit-regular">
                  Last location:{" "}
                  {order.currentLocation.address ||
                    `${order.currentLocation.latitude}, ${order.currentLocation.longitude}`}
                </AppText>
              </View>
            )}
          </View>

          {/* Timeline Header */}
          <AppText className="font-outfit-semibold text-primary mb-4">
            Activity Timeline
          </AppText>

          {/* Activities Timeline */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ maxHeight: 250 }}
          >
            <View>
              {activities.length > 0 ? (
                activities.map((activity, index) => (
                  <View key={activity.id} className="flex-row mb-4">
                    {/* Timeline line and dot */}
                    <View className="items-center mr-4">
                      <View
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: 6,
                          backgroundColor: getStatusColor(activity.status),
                        }}
                      />
                      {index !== activities.length - 1 && (
                        <View
                          style={{
                            width: 2,
                            height: 40,
                            backgroundColor: "#E0E0E0",
                            marginTop: 4,
                          }}
                        />
                      )}
                    </View>

                    {/* Activity content */}
                    <View className="flex-1 pt-0.5">
                      <AppText className="font-outfit-semibold text-primary">
                        {getStatusLabel(activity.status)}
                      </AppText>
                      <AppText className="text-secondary text-xs font-outfit-regular mb-1">
                        {new Date(activity.timestamp).toLocaleString()}
                      </AppText>
                      <AppText className="text-primary text-sm font-outfit-regular">
                        {activity.description}
                      </AppText>
                      {activity.location && (
                        <AppText className="text-secondary text-xs font-outfit-regular mt-1">
                          📍 {activity.location}
                        </AppText>
                      )}
                    </View>
                  </View>
                ))
              ) : (
                <View className="py-4">
                  <AppText className="text-secondary text-center font-outfit-regular">
                    No activity recorded yet
                  </AppText>
                </View>
              )}
            </View>
          </ScrollView>

          {/* Driver Section */}
          {order.driver && (
            <View
              className="mt-6 pt-6 border-t"
              style={{ borderColor: "#E0E0E0" }}
            >
              <View className="flex-row items-center justify-between">
                {/* Avatar */}
                <View
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: "#1A1A1A",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 12,
                  }}
                >
                  <MaterialCommunityIcons
                    name="human"
                    size={24}
                    color="white"
                  />
                </View>

                {/* Driver Info */}
                <View className="flex-1">
                  <AppText className="font-outfit-semibold text-primary mb-1">
                    {order.driver.name}
                  </AppText>
                  <AppText className="text-secondary text-xs font-outfit-regular">
                    Delivery Driver
                  </AppText>
                </View>

                {/* Call Button */}
                <TouchableOpacity
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: "#1A1A1A",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name="call" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          )}

          <View style={{ height: sizeBlock.getHeightSize(10) }} />
        </View>
      </Animated.View>
    </Modal>
  );
};

export default OrderTrackingBottomSheet;
