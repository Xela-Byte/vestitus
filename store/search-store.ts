import { FilterOptions } from "@/types/filter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface SearchState {
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
  resetFilters: () => void;
}

const DEFAULT_FILTERS: FilterOptions = {
  sortBy: "All",
  priceMin: 0,
  priceMax: 5000,
  useCustomPrice: false,
};

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      filters: DEFAULT_FILTERS,
      setFilters: (filters: FilterOptions) =>
        set({
          filters,
        }),
      resetFilters: () =>
        set({
          filters: DEFAULT_FILTERS,
        }),
    }),
    {
      name: "search-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
