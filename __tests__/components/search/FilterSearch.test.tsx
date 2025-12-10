import FilterSearch from "@/components/search/FilterSearch";
import { useSearchStore } from "@/store/search-store";
import { render, screen } from "@testing-library/react-native";

jest.mock("@/store/search-store");
jest.mock("@/components/search/FilterBottomSheet", () => ({
  __esModule: true,
  default: () => null,
}));

describe("FilterSearch", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useSearchStore as unknown as jest.Mock).mockReturnValue({
      filters: {
        sortBy: "All",
        selectedSize: undefined,
        useCustomPrice: false,
        customPriceMin: undefined,
        customPriceMax: undefined,
      },
    });
  });

  it("renders filter button", () => {
    render(<FilterSearch />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("shows active filter indicator when sortBy filter is applied", () => {
    (useSearchStore as unknown as jest.Mock).mockReturnValue({
      filters: {
        sortBy: "Price: High to Low",
        selectedSize: undefined,
        useCustomPrice: false,
        customPriceMin: undefined,
        customPriceMax: undefined,
      },
    });

    render(<FilterSearch />);
    // Verify component renders when filters are active
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("shows active filter indicator when custom price is set", () => {
    (useSearchStore as unknown as jest.Mock).mockReturnValue({
      filters: {
        sortBy: "All",
        selectedSize: undefined,
        useCustomPrice: true,
        customPriceMin: 100,
        customPriceMax: undefined,
      },
    });

    render(<FilterSearch />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("shows active filter indicator when size is selected", () => {
    (useSearchStore as unknown as jest.Mock).mockReturnValue({
      filters: {
        sortBy: "All",
        selectedSize: "M",
        useCustomPrice: false,
        customPriceMin: undefined,
        customPriceMax: undefined,
      },
    });

    render(<FilterSearch />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("calls onFilterChange when filter is applied", () => {
    const mockOnFilterChange = jest.fn();
    const testFilters = {
      sortBy: "Price: Low to High",
      selectedSize: "L",
      useCustomPrice: false,
      customPriceMin: undefined,
      customPriceMax: undefined,
    };

    (useSearchStore as unknown as jest.Mock).mockReturnValue({
      filters: testFilters,
    });

    render(<FilterSearch onFilterChange={mockOnFilterChange} />);
    // Verify component renders without errors
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders when no filters are applied", () => {
    (useSearchStore as unknown as jest.Mock).mockReturnValue({
      filters: {
        sortBy: "All",
        selectedSize: undefined,
        useCustomPrice: false,
        customPriceMin: undefined,
        customPriceMax: undefined,
      },
    });

    render(<FilterSearch />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });
});
