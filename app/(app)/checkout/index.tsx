import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import AppText from "@/components/ui/AppText";
import HeaderComponent from "@/components/ui/HeaderComponent";
import PopupModal from "@/components/ui/PopupModal";
import { sizeBlock } from "@/styles/universalStyle";
import Feather from "@expo/vector-icons/Feather";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const CheckoutScreen = (props: Props) => {
  const { control, watch } = useForm();
  const promoCode = watch("promoCode", "");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const router = useRouter();
  return (
    <>
      <SafeAreaView className="flex-1 bg-white">
        {/* Header */}
        <View className="px-5 pb-3">
          <HeaderComponent title="Checkout" />
        </View>

        <ScrollView>
          <View className="px-7">
            <View className="py-5 border-t border-b border-stroke">
              <View className="flex flex-row items-start justify-between">
                <AppText variant="h4">Delivery Address</AppText>
                <Link asChild href="/address">
                  <AppText className="underline text-sm font-outfit-medium">
                    Change
                  </AppText>
                </Link>
              </View>

              <View className="py-3 flex flex-row gap-x-3">
                <Feather name="map-pin" size={24} color="#808080" />
                <View>
                  <AppText className="text-sm font-outfit-semibold">
                    Home
                  </AppText>
                  <AppText variant="caption" className="text-secondary">
                    123 Main Street, Springfield, USA
                  </AppText>
                </View>
              </View>
            </View>
          </View>

          <View className="px-7 py-4 gap-y-3">
            <AppText variant="h4">Payment Method</AppText>
            <AppButton label="Stripe Pay" className="w-1/3" />
          </View>

          <View className="px-7">
            <View className="py-5 border-y border-stroke">
              {/* Information */}
              <AppText variant="h4">Order Summary</AppText>
              <View className="pb-5 gap-y-2">
                <View className="flex flex-row items-center justify-between">
                  <AppText className="text-secondary">Sub-total</AppText>
                  <AppText variant="h4">$1,900</AppText>
                </View>
                <View className="flex flex-row items-center justify-between">
                  <AppText className="text-secondary">VAT (%)</AppText>
                  <AppText variant="h4">$0.00</AppText>
                </View>
                <View className="flex flex-row items-center justify-between">
                  <AppText className="text-secondary">Shipping fee</AppText>
                  <AppText variant="h4">$80</AppText>
                </View>
              </View>

              <View className="flex flex-row items-center justify-between pt-5">
                <AppText variant="h4">Total</AppText>
                <AppText variant="h4">$1,900</AppText>
              </View>
            </View>
          </View>

          <View className="p-7 gap-y-3">
            <View className="flex flex-row gap-x-4">
              <View className="flex-1 h-14 flex flex-row items-center gap-x-2 border border-stroke rounded-lg p-3">
                <Feather
                  name="tag"
                  size={20}
                  color="#808080"
                  style={{
                    marginRight: -sizeBlock.getWidthSize(5),
                  }}
                />
                <AppInput
                  placeholder="Enter promo code"
                  control={control}
                  name="promoCode"
                  className="h-full  border-0 pr-8 pb-2"
                />
              </View>
              <AppButton
                label="Add"
                disabled={!promoCode.trim()}
                className={`${promoCode.trim() ? "bg-primary" : "bg-stroke"} w-1/4`}
              />
            </View>
          </View>

          <AppButton
            label="Place Order"
            className="mx-7 mt-20"
            onPress={() => setShowSuccessModal(true)}
          />
        </ScrollView>
      </SafeAreaView>

      <PopupModal
        visible={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          router.push("/(tabs)");
        }}
        title="Congratulations"
        description="Your order has been placed"
        primaryAction={{
          label: "Track Your Order",
          onPress: () => {
            setShowSuccessModal(false);
            router.push("/(tabs)");
          },
        }}
      />
    </>
  );
};

export default CheckoutScreen;
