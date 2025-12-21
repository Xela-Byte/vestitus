import FilterIcon from "@/assets/icons/filter.svg";
import { useSearchStore } from "@/store/search-store";
import { sizeBlock } from "@/styles/universalStyle";
import React, { useMemo } from "react";
import { Modal, Pressable, View } from "react-native";
import FilterBottomSheet from "./FilterBottomSheet";

type Props = {
  onFilterChange?: (filters: any) => void;
};

const FilterSearch = ({ onFilterChange }: Props) => {
  const filters = useSearchStore((state) => state.filters);
  const [showFilterSheet, setShowFilterSheet] = React.useState(false);
  const handleFilterPress = () => {
    setShowFilterSheet(true);
  };

  const hasActiveFilters = useMemo(
    () =>
      filters.sortBy !== "All" ||
      filters.selectedSize ||
      (filters.useCustomPrice &&
        (filters.customPriceMin || filters.customPriceMax)),
    [filters]
  );

  return (
    <>
      <Pressable
        onPress={handleFilterPress}
        style={{
          height: sizeBlock.getHeightSize(36),
          width: sizeBlock.getHeightSize(36),
        }}
        className="relative bg-primary rounded-xl flex items-center justify-center"
      >
        <FilterIcon />
        {hasActiveFilters && (
          <View className="absolute top-1.5 right-1.5 w-2 h-2 bg-white rounded-full" />
        )}
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showFilterSheet}
        onRequestClose={() => setShowFilterSheet(false)}
      >
        <FilterBottomSheet
          onClose={() => setShowFilterSheet(false)}
          visible
          onApplyFilter={() => {
            onFilterChange?.(filters);
            setShowFilterSheet(false);
          }}
        />
      </Modal>
    </>
  );
};

export default FilterSearch;
