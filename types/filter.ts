export interface FilterOptions {
  sortBy: string;
  priceMin: number;
  priceMax: number;
  useCustomPrice: boolean;
  customPriceMin?: number;
  customPriceMax?: number;
  selectedSize?: string;
}
