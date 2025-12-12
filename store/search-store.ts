import { FilterOptions } from "@/types/filter";
import { create } from "zustand";

interface SearchState {
  filters: FilterOptions;
  setFilters: (filters: FilterOptions) => void;
  resetFilters: () => void;
  transcribedText: string;
  setTranscribedText: (text: string) => void;
}

const DEFAULT_FILTERS: FilterOptions = {
  sortBy: "All",
  priceMin: 0,
  priceMax: 5000,
  useCustomPrice: false,
};

export const useSearchStore = create<SearchState>()((set) => ({
  filters: DEFAULT_FILTERS,
  setFilters: (filters: FilterOptions) =>
    set({
      filters,
    }),
  resetFilters: () =>
    set({
      filters: DEFAULT_FILTERS,
    }),
  transcribedText: "",
  setTranscribedText: (text: string) =>
    set({
      transcribedText: text,
    }),
}));
