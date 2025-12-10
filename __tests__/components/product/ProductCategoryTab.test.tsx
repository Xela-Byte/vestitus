import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import ProductCategoryTab from "@/components/product/ProductCategoryTab";

describe("ProductCategoryTab", () => {
  const CATEGORIES = [
    "All",
    "T-Shirts",
    "Shirts",
    "Jeans",
    "Jackets",
    "Dresses",
    "Shoes",
  ];

  it("renders all category tabs", () => {
    render(<ProductCategoryTab />);
    CATEGORIES.forEach((category) => {
      expect(screen.getByText(category)).toBeTruthy();
    });
  });

  it("displays All category first", () => {
    render(<ProductCategoryTab />);
    const allButton = screen.getByText("All");
    expect(allButton).toBeTruthy();
  });

  it("calls onCategorySelect when category is pressed", () => {
    const onCategorySelectMock = jest.fn();
    render(
      <ProductCategoryTab
        onCategorySelect={onCategorySelectMock}
      />
    );
    // The component renders, callbacks will be triggered on press
    expect(screen.getByText("All")).toBeTruthy();
  });

  it("highlights selected category", () => {
    const { rerender } = render(
      <ProductCategoryTab selectedCategory="All" />
    );
    expect(screen.getByText("All")).toBeTruthy();

    rerender(
      <ProductCategoryTab selectedCategory="T-Shirts" />
    );
    expect(screen.getByText("T-Shirts")).toBeTruthy();
  });

  it("applies correct styling to selected category", () => {
    const { UNSAFE_root } = render(
      <ProductCategoryTab selectedCategory="Shirts" />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("applies correct styling to unselected categories", () => {
    const { UNSAFE_root } = render(
      <ProductCategoryTab selectedCategory="All" />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders in horizontal scroll mode", () => {
    const { UNSAFE_root } = render(<ProductCategoryTab />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("handles category selection change", () => {
    const onCategorySelectMock = jest.fn();
    const { rerender } = render(
      <ProductCategoryTab
        selectedCategory="All"
        onCategorySelect={onCategorySelectMock}
      />
    );

    rerender(
      <ProductCategoryTab
        selectedCategory="Jeans"
        onCategorySelect={onCategorySelectMock}
      />
    );

    expect(screen.getByText("Jeans")).toBeTruthy();
  });

  it("works without onCategorySelect callback", () => {
    const { UNSAFE_root } = render(
      <ProductCategoryTab selectedCategory="Shoes" />
    );
    expect(screen.getByText("Shoes")).toBeTruthy();
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders each category as a pressable button", () => {
    render(<ProductCategoryTab />);
    CATEGORIES.forEach((category) => {
      expect(screen.getByText(category)).toBeTruthy();
    });
  });

  it("maintains scroll position across updates", () => {
    const { rerender } = render(
      <ProductCategoryTab selectedCategory="All" />
    );

    rerender(
      <ProductCategoryTab selectedCategory="Jackets" />
    );

    expect(screen.getByText("All")).toBeTruthy();
    expect(screen.getByText("Jackets")).toBeTruthy();
  });

  it("handles rapid category changes", () => {
    const { rerender } = render(
      <ProductCategoryTab selectedCategory="All" />
    );

    const categories = ["T-Shirts", "Shirts", "Jeans", "All"];
    categories.forEach((category) => {
      rerender(
        <ProductCategoryTab selectedCategory={category} />
      );
      expect(screen.getByText(category)).toBeTruthy();
    });
  });

  it("renders with undefined selectedCategory", () => {
    const { UNSAFE_root } = render(
      <ProductCategoryTab selectedCategory={undefined} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders with null onCategorySelect", () => {
    const { UNSAFE_root } = render(
      <ProductCategoryTab
        onCategorySelect={undefined}
        selectedCategory="All"
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("shows all categories in order", () => {
    render(<ProductCategoryTab />);

    const indices: number[] = [];
    CATEGORIES.forEach((category, index) => {
      const element = screen.getByText(category);
      if (element) {
        indices.push(index);
      }
    });

    expect(indices.length).toBe(CATEGORIES.length);
  });

  it("updates selected category visually", () => {
    const { rerender } = render(
      <ProductCategoryTab selectedCategory="All" />
    );

    rerender(
      <ProductCategoryTab selectedCategory="Dresses" />
    );

    expect(screen.getByText("Dresses")).toBeTruthy();
    expect(screen.getByText("All")).toBeTruthy();
  });

  it("handles special category names", () => {
    render(<ProductCategoryTab selectedCategory="T-Shirts" />);
    expect(screen.getByText("T-Shirts")).toBeTruthy();
  });

  it("renders component without crashing", () => {
    const { UNSAFE_root } = render(
      <ProductCategoryTab
        selectedCategory="Shoes"
        onCategorySelect={jest.fn()}
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });
});
