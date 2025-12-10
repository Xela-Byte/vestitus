import { FilterOptions } from "@/types/filter";

export const SORT_BY_OPTIONS = [
  "Relevance",
  "Price: Low - High",
  "Price: High - Low",
];

export const SIZE_OPTIONS = ["XS", "S", "M", "L", "XL", "XXL"];

export const INITIAL_FILTERS: FilterOptions = {
  sortBy: SORT_BY_OPTIONS[0],
  priceMin: 0,
  priceMax: 5000,
  useCustomPrice: false,
  selectedSize: SIZE_OPTIONS[0],
};
