import ReviewCard from "@/components/product/ReviewCard";
import ReviewStars from "@/components/product/ReviewStars";
import AppText from "@/components/ui/AppText";
import HeaderComponent from "@/components/ui/HeaderComponent";
import ProgressBar from "@/components/ui/ProgressBar";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductReview = () => {
  return (
    <SafeAreaView>
      <View className="px-5">
        <HeaderComponent title="Product Reviews" />
        <View className="border-t py-7 border-b border-stroke">
          <View className="flex pb-3 flex-row gap-x-3">
            <AppText variant="h1">4.0</AppText>
            <View className="flex flex-col flex-1">
              {/* Stars */}
              <ReviewStars size={24} rating={4} />
              <AppText className="text-secondary">45 Reviews</AppText>
            </View>
          </View>

          <View className="gap-y-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <View key={index} className="flex flex-row items-center gap-x-4">
                <ReviewStars size={14} rating={5 - index} />
                <View className="flex-1">
                  <ProgressBar progress={15 * (5 - index)} />
                </View>
              </View>
            ))}
          </View>
        </View>

        <View>
          <View className="flex flex-row items-center justify-between">
            <AppText variant="h4" className="mt-6 mb-4">
              45 Reviews
            </AppText>

            <View className="flex flex-row items-center">
              <AppText className="text-secondary">Most Relevant</AppText>
              <Entypo name="chevron-small-down" size={24} color="#808080" />
            </View>
          </View>

          <View className="h-[65%]">
            <FlatList
              data={Array.from({ length: 5 })}
              contentContainerClassName="pb-10"
              renderItem={() => {
                return (
                  <ReviewCard
                    rating={4}
                    reviewText="Great product, really enjoyed using it!"
                    reviewerName="John Doe"
                    reviewDate="6 days ago"
                  />
                );
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductReview;
