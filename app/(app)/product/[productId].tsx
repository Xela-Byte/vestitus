import ProductCard from "@/components/product/ProductCard";
import AppButton from "@/components/ui/AppButton";
import AppText from "@/components/ui/AppText";
import HeaderComponent from "@/components/ui/HeaderComponent";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = Record<string, never>;

const SpecificProduct = (props: Props) => {
  const { productId } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-5 flex-1">
        {/* Header */}
        <HeaderComponent title="Product Details" />
        <ScrollView>
          <View>
            <ProductCard
              isSaved={false}
              onSaveToggle={() => {}}
              containerClassName="h-[50vh]"
              imageStyle={{
                height: "90%",
              }}
              titleClassName="text-2xl"
              showDescription={false}
              item={{
                id: productId as string,
                name: "Sample Product",
                price: 49.99,
                discountPercent: 10,
              }}
            />
          </View>
          <Link
            href={`/product/review/${productId}`}
            className="flex flex-row gap-x-2 items-center"
          >
            <AntDesign name="star" size={18} color="#ffa928" />
            <AppText variant="h4" className="text-base underline">
              4.0/5 <AppText className="text-secondary">(45 reviews)</AppText>
            </AppText>
          </Link>

          <View className="gap-y-4 mt-2">
            <AppText className="text-base text-gray-600">
              The name says it all, the right size slightly snugs the body
              leaving enough room for comfort in the sleeves and waist.
            </AppText>

            <AppText weight="semibold" className="text-xl">
              Choose size
            </AppText>

            <View className="flex flex-row gap-x-3">
              {["S", "M", "L", "XL"].map((size) => (
                <View
                  key={size}
                  className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center"
                >
                  <AppText className="text-base">{size}</AppText>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
      <View className="w-full bg-white pt-6 pb-3 px-5 border-t border-gray-200 flex flex-row items-center justify-between">
        <View className="flex-[0.25]">
          <AppText className="text-secondary">Price</AppText>
          <AppText variant="h3">$39.99</AppText>
        </View>

        <View className="flex-[0.75]">
          <AppButton
            icon={<AntDesign name="shopping-cart" size={24} color="white" />}
            label="Add to Cart"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SpecificProduct;
