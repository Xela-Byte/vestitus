import Shirt from "@/assets/images/shirt.jpg";
import ReviewBottomSheet from "@/components/order/ReviewBottomSheet";
import { borderRadius, sizeBlock } from "@/styles/universalStyle";
import { Order } from "@/types/order";
import { getStatusColor, getStatusLabel } from "@/utils/helpers/order";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import AppButton from "../ui/AppButton";
import AppText from "../ui/AppText";

type Props = {
  order: Order;
  onReviewSubmit?: (orderId: string, rating: number, comment: string) => void;
};

const OrderCard = ({ order, onReviewSubmit }: Props) => {
  const firstItem = order.items[0];
  const itemCount = order.items.length;
  const [reviewSheetVisible, setReviewSheetVisible] = useState(false);

  const handleReviewSubmit = (rating: number, comment: string) => {
    onReviewSubmit?.(order.id, rating, comment);
    setReviewSheetVisible(false);
  };

  return (
    <>
      <View className="bg-white rounded-lg px-4 py-4 mb-3 border border-stroke">
        {/* Header */}
        <View className="flex flex-row items-center justify-between mb-3">
          <AppText className="font-outfit-semibold text-base">
            Order #{order.orderNumber}
          </AppText>
          <View
            className="px-3 py-1 rounded-full"
            style={{ backgroundColor: getStatusColor(order.status) + "20" }}
          >
            <AppText
              className="font-outfit-medium text-xs"
              style={{ color: getStatusColor(order.status) }}
            >
              {getStatusLabel(order.status)}
            </AppText>
          </View>
        </View>

        {/* Items Preview */}
        <View className="flex flex-row items-center gap-3 mb-3">
          <Image
            source={firstItem.imageUrl || Shirt}
            style={{
              width: sizeBlock.getWidthSize(60),
              height: sizeBlock.getHeightSize(60),
              borderRadius: borderRadius.small,
            }}
          />
          <View className="flex-1">
            <AppText className="font-outfit-medium text-sm" numberOfLines={1}>
              {firstItem.productName}
            </AppText>
            {itemCount > 1 && (
              <AppText
                variant="caption"
                className="text-xs text-secondary mt-1"
              >
                +{itemCount - 1} more item{itemCount > 2 ? "s" : ""}
              </AppText>
            )}
            <AppText variant="caption" className="text-xs text-secondary mt-1">
              Qty: {order.items.reduce((sum, item) => sum + item.quantity, 0)}
            </AppText>
          </View>
        </View>

        {/* Footer */}
        <View className="flex flex-row items-center justify-between pt-3 border-t border-t-stroke">
          <View className="flex-1">
            <AppText variant="caption" className="text-secondary mb-1">
              Total Amount
            </AppText>
            <AppText className="font-outfit-semibold text-base">
              ${order.totalAmount.toFixed(2)}
            </AppText>
          </View>

          {order.status === "shipped" && (
            <Link asChild href={`/orders/track-order/${order.id}`}>
              <AppButton
                label="Track Order"
                textClassName="text-xs"
                size="sm"
                className="px-5"
              />
            </Link>
          )}

          {order.status === "delivered" && (
            <>
              {order.review ? (
                <AppButton
                  variant="outline"
                  label={`★ ${order.review.rating}/5`}
                  icon={
                    <MaterialCommunityIcons
                      name="star"
                      size={14}
                      color="#1A1A1A"
                    />
                  }
                  textClassName="text-xs"
                  size="sm"
                  className="px-5"
                  disabled
                />
              ) : (
                <AppButton
                  label="Leave a Review"
                  textClassName="text-xs"
                  size="sm"
                  className="px-5"
                  onPress={() => setReviewSheetVisible(true)}
                />
              )}
            </>
          )}
        </View>
      </View>

      {/* Review Bottom Sheet */}
      <ReviewBottomSheet
        visible={reviewSheetVisible}
        orderId={order.id}
        onClose={() => setReviewSheetVisible(false)}
        onSubmit={handleReviewSubmit}
      />
    </>
  );
};

export default OrderCard;
