import { useSearchStore } from "@/store/search-store";
import { FilterOptions } from "@/types/filter";

describe("SearchStore", () => {
  beforeEach(() => {
    // Clear store before each test
    useSearchStore.setState({
      filters: {
        sortBy: "All",
        priceMin: 0,
        priceMax: 5000,
        useCustomPrice: false,
      },
    });
  });

  it("initializes with default filters", () => {
    const { filters } = useSearchStore.getState();
    expect(filters.sortBy).toBe("All");
    expect(filters.priceMin).toBe(0);
    expect(filters.priceMax).toBe(5000);
    expect(filters.useCustomPrice).toBe(false);
  });

  it("updates filters with setFilters", () => {
    const newFilters: FilterOptions = {
      sortBy: "Price: High to Low",
      priceMin: 100,
      priceMax: 3000,
      useCustomPrice: true,
      customPriceMin: 100,
      customPriceMax: 3000,
      selectedSize: "M",
    };

    useSearchStore.getState().setFilters(newFilters);
    const { filters } = useSearchStore.getState();

    expect(filters.sortBy).toBe("Price: High to Low");
    expect(filters.priceMin).toBe(100);
    expect(filters.priceMax).toBe(3000);
    expect(filters.useCustomPrice).toBe(true);
    expect(filters.customPriceMin).toBe(100);
    expect(filters.customPriceMax).toBe(3000);
    expect(filters.selectedSize).toBe("M");
  });

  it("resets filters to default values", () => {
    // First set some filters
    useSearchStore.getState().setFilters({
      sortBy: "Price: Low to High",
      priceMin: 50,
      priceMax: 1000,
      useCustomPrice: true,
    });

    // Then reset
    useSearchStore.getState().resetFilters();
    const { filters } = useSearchStore.getState();

    expect(filters.sortBy).toBe("All");
    expect(filters.priceMin).toBe(0);
    expect(filters.priceMax).toBe(5000);
    expect(filters.useCustomPrice).toBe(false);
  });

  it("updates only specified filter properties", () => {
    const partialFilters: FilterOptions = {
      sortBy: "Rating: High to Low",
      priceMin: 0,
      priceMax: 5000,
      useCustomPrice: false,
    };

    useSearchStore.getState().setFilters(partialFilters);
    const { filters } = useSearchStore.getState();

    expect(filters.sortBy).toBe("Rating: High to Low");
  });

  it("handles custom price filters", () => {
    const customPriceFilters: FilterOptions = {
      sortBy: "All",
      priceMin: 0,
      priceMax: 5000,
      useCustomPrice: true,
      customPriceMin: 200,
      customPriceMax: 800,
    };

    useSearchStore.getState().setFilters(customPriceFilters);
    const { filters } = useSearchStore.getState();

    expect(filters.useCustomPrice).toBe(true);
    expect(filters.customPriceMin).toBe(200);
    expect(filters.customPriceMax).toBe(800);
  });

  it("handles size selection", () => {
    const sizeFilters: FilterOptions = {
      sortBy: "All",
      priceMin: 0,
      priceMax: 5000,
      useCustomPrice: false,
      selectedSize: "L",
    };

    useSearchStore.getState().setFilters(sizeFilters);
    const { filters } = useSearchStore.getState();

    expect(filters.selectedSize).toBe("L");
  });

  it("supports subscription to filter changes", () => {
    const listener = jest.fn();
    const unsubscribe = useSearchStore.subscribe(listener);

    const newFilters: FilterOptions = {
      sortBy: "Price: Low to High",
      priceMin: 0,
      priceMax: 5000,
      useCustomPrice: false,
    };

    useSearchStore.getState().setFilters(newFilters);

    expect(listener).toHaveBeenCalled();
    unsubscribe();
  });

  it("persists filters state", async () => {
    const newFilters: FilterOptions = {
      sortBy: "Price: High to Low",
      priceMin: 100,
      priceMax: 2000,
      useCustomPrice: true,
      customPriceMin: 100,
      customPriceMax: 2000,
    };

    useSearchStore.getState().setFilters(newFilters);
    const { filters } = useSearchStore.getState();

    expect(filters).toEqual({
      ...newFilters,
    });
  });
});
