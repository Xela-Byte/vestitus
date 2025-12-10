import { FilterOptions } from "@/types/filter";
import {
  INITIAL_FILTERS,
  SIZE_OPTIONS,
  SORT_BY_OPTIONS,
} from "@/utils/data/filter";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { FlatList, Pressable, TextInput, View } from "react-native";
import AppButton from "../ui/AppButton";
import AppText from "../ui/AppText";
import RangeSlider from "../ui/Slider";

interface FilterBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  onApplyFilter: (filters: FilterOptions) => void;
  initialFilters?: FilterOptions;
}

const snapPoints = ["80%", "90%"];

const FilterBottomSheet = ({
  visible,
  onClose,
  onApplyFilter,
  initialFilters = INITIAL_FILTERS,
}: FilterBottomSheetProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [sortBy, setSortBy] = useState(
    initialFilters.sortBy || SORT_BY_OPTIONS[0]
  );

  const [priceMin, setPriceMin] = useState(initialFilters.priceMin);
  const [useCustomPrice, setUseCustomPrice] = useState(
    initialFilters.useCustomPrice
  );
  const [customPriceMin, setCustomPriceMin] = useState(
    initialFilters.customPriceMin?.toString() || ""
  );
  const [customPriceMax, setCustomPriceMax] = useState(
    initialFilters.customPriceMax?.toString() || ""
  );
  const [selectedSize, setSelectedSize] = useState(initialFilters.selectedSize);

  // Handle bottom sheet changes
  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose();
      }
    },
    [onClose]
  );

  // Snap points memo
  const memoizedSnapPoints = useMemo(() => snapPoints, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.5}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        onPress={onClose}
      />
    ),
    [onClose]
  );

  const handleApplyFilter = () => {
    const filters: FilterOptions = {
      sortBy,
      priceMin: useCustomPrice ? parseInt(customPriceMin) || 0 : priceMin,
      priceMax: useCustomPrice ? parseInt(customPriceMax) || 5000 : 5000,
      useCustomPrice,
      customPriceMin: customPriceMin ? parseInt(customPriceMin) : undefined,
      customPriceMax: customPriceMax ? parseInt(customPriceMax) : undefined,
      selectedSize: selectedSize || undefined,
    };
    onApplyFilter(filters);
    onClose();
  };

  const renderSortByItem = (category: string, index: number) => {
    return (
      <Pressable
        onPress={() => setSortBy(category)}
        key={index}
        className={`p-3 flex items-center justify-center rounded-xl mr-3 ${
          category === sortBy ? "bg-primary" : "bg-gray-200"
        }`}
      >
        <AppText
          className={`text-sm font-outfit-regular ${
            category === sortBy ? "text-white" : "text-gray-800"
          }`}
        >
          {category}
        </AppText>
      </Pressable>
    );
  };

  const renderSizeOption = (size: string) => {
    return (
      <Pressable
        onPress={() => {
          setSelectedSize(selectedSize === size ? "" : size);
        }}
        className={`flex-1 p-3 items-center justify-center rounded-lg m-1 ${
          selectedSize === size
            ? "bg-primary"
            : "bg-gray-100 border border-gray-300"
        }`}
      >
        <AppText
          className={`font-outfit-medium text-sm ${
            selectedSize === size ? "text-white" : "text-gray-800"
          }`}
        >
          {size}
        </AppText>
      </Pressable>
    );
  };

  if (!visible) return null;

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={memoizedSnapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose
      backgroundStyle={{ backgroundColor: "#FFFFFF" }}
      handleIndicatorStyle={{ backgroundColor: "#D0D0D0" }}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView
        style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 24 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <AppText className="text-lg font-outfit-bold">Filters</AppText>
          <Pressable onPress={() => bottomSheetRef.current?.close()}>
            <AppText className="text-2xl text-gray-400">✕</AppText>
          </Pressable>
        </View>

        {/* Sort By Section */}
        <View className="mb-8">
          <AppText className="text-base font-outfit-semibold mb-4">
            Sort By
          </AppText>
          <FlatList
            data={SORT_BY_OPTIONS}
            renderItem={({ item, index }) => renderSortByItem(item, index)}
            keyExtractor={(item, index) => `sort-${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>

        {/* Price Section */}
        <View className="mb-8">
          <AppText className="text-base font-outfit-semibold mb-4">
            Price
          </AppText>

          {!useCustomPrice ? (
            <>
              {/* Range Slider */}
              <RangeSlider
                min={0}
                max={5000}
                step={50}
                onChange={(value) => setPriceMin(value)}
                value={priceMin}
                prefix="$"
                className="mb-6"
              />

              <AppButton variant="outline" label="Custom Price Range" />
            </>
          ) : (
            <View>
              {/* Custom Price Inputs */}
              <View className="flex-row gap-3 mb-4">
                <View className="flex-1">
                  <AppText className="text-xs text-secondary mb-2">
                    Min Price
                  </AppText>
                  <View className="border border-stroke rounded-lg px-3 py-2 bg-input flex-row items-center">
                    <AppText className="text-sm font-outfit-semibold mr-1">
                      $
                    </AppText>
                    <TextInput
                      value={customPriceMin}
                      onChangeText={setCustomPriceMin}
                      placeholder="0"
                      placeholderTextColor="#B3B3B3"
                      keyboardType="number-pad"
                      className="flex-1 font-outfit-regular text-sm"
                    />
                  </View>
                </View>
                <View className="flex-1">
                  <AppText className="text-xs text-secondary mb-2">
                    Max Price
                  </AppText>
                  <View className="border border-stroke rounded-lg px-3 py-2 bg-input flex-row items-center">
                    <AppText className="text-sm font-outfit-semibold mr-1">
                      $
                    </AppText>
                    <TextInput
                      value={customPriceMax}
                      onChangeText={setCustomPriceMax}
                      placeholder="5000"
                      placeholderTextColor="#B3B3B3"
                      keyboardType="number-pad"
                      className="flex-1 font-outfit-regular text-sm"
                    />
                  </View>
                </View>
              </View>

              {/* Back to Slider Button */}
              <Pressable
                onPress={() => {
                  setUseCustomPrice(false);
                  setCustomPriceMin("");
                  setCustomPriceMax("");
                }}
                className="border border-gray-300 rounded-lg py-3 px-4"
              >
                <AppText className="text-center font-outfit-semibold text-gray-700">
                  Use Slider
                </AppText>
              </Pressable>
            </View>
          )}
        </View>

        {/* Size Section */}
        <View className="mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <AppText className="text-base font-outfit-semibold">Size</AppText>
          </View>

          <View className="flex-row flex-wrap">
            {SIZE_OPTIONS.map((size) => (
              <React.Fragment key={size}>
                {renderSizeOption(size)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* Apply Filter Button */}
        <View className="mt-6 pt-6 border-t border-stroke">
          <AppButton
            label="Apply Filter"
            variant="primary"
            fullWidth
            onPress={handleApplyFilter}
          />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default FilterBottomSheet;
