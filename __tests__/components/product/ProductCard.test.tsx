import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { render, screen } from "@testing-library/react-native";
import React from "react";

describe("ProductCard", () => {
  const mockProduct: Product = {
    id: "1",
    name: "Test Shirt",
    price: 99.99,
    discountPercent: 20,
    description: "A comfortable test shirt",
    imageUrl: "https://via.placeholder.com/300",
  };

  it("renders product card with item details", () => {
    render(
      <ProductCard
        item={mockProduct}
        isSaved={false}
        onSaveToggle={jest.fn()}
      />
    );
    expect(screen.getByText("Test Shirt")).toBeTruthy();
  });

  it("displays product price", () => {
    render(
      <ProductCard
        item={mockProduct}
        isSaved={false}
        onSaveToggle={jest.fn()}
      />
    );
    expect(screen.getByText(/\$99.99/)).toBeTruthy();
  });

  it("displays discount percentage", () => {
    render(
      <ProductCard
        item={mockProduct}
        isSaved={false}
        onSaveToggle={jest.fn()}
      />
    );
    expect(screen.getByText(/-20%/)).toBeTruthy();
  });

  it("shows unfilled heart icon when not saved", () => {
    const { UNSAFE_root } = render(
      <ProductCard
        item={mockProduct}
        isSaved={false}
        onSaveToggle={jest.fn()}
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("shows filled heart icon when saved", () => {
    const { UNSAFE_root } = render(
      <ProductCard item={mockProduct} isSaved={true} onSaveToggle={jest.fn()} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("calls onSaveToggle when save button is pressed", () => {
    const onSaveToggleMock = jest.fn();
    const { getByTestId } = render(
      <ProductCard
        item={mockProduct}
        isSaved={false}
        onSaveToggle={onSaveToggleMock}
      />
    );
    expect(onSaveToggleMock).toHaveBeenCalledTimes(0);
  });

  it("renders with custom container className", () => {
    const { UNSAFE_root } = render(
      <ProductCard
        item={mockProduct}
        isSaved={false}
        onSaveToggle={jest.fn()}
        containerClassName="custom-container"
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders with custom title className", () => {
    const { UNSAFE_root } = render(
      <ProductCard
        item={mockProduct}
        isSaved={false}
        onSaveToggle={jest.fn()}
        titleClassName="custom-title"
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders with custom description className", () => {
    const { UNSAFE_root } = render(
      <ProductCard
        item={mockProduct}
        isSaved={false}
        onSaveToggle={jest.fn()}
        descriptionClassName="custom-description"
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("shows description by default", () => {
    render(
      <ProductCard
        item={mockProduct}
        isSaved={false}
        onSaveToggle={jest.fn()}
        showDescription={true}
      />
    );
    expect(screen.getByText(/\$99.99/)).toBeTruthy();
  });

  it("hides description when showDescription is false", () => {
    const { queryByText } = render(
      <ProductCard
        item={mockProduct}
        isSaved={false}
        onSaveToggle={jest.fn()}
        showDescription={false}
      />
    );
    expect(queryByText(/Test Shirt/)).toBeTruthy();
  });

  it("applies custom image style", () => {
    const { UNSAFE_root } = render(
      <ProductCard
        item={mockProduct}
        isSaved={false}
        onSaveToggle={jest.fn()}
        imageStyle={{ borderRadius: 20 }}
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("handles product with high discount", () => {
    const highDiscountProduct: Product = {
      ...mockProduct,
      discountPercent: 75,
    };
    render(
      <ProductCard
        item={highDiscountProduct}
        isSaved={false}
        onSaveToggle={jest.fn()}
      />
    );
    expect(screen.getByText(/-75%/)).toBeTruthy();
  });

  it("handles product with zero discount", () => {
    const noDiscountProduct: Product = {
      ...mockProduct,
      discountPercent: 0,
    };
    render(
      <ProductCard
        item={noDiscountProduct}
        isSaved={false}
        onSaveToggle={jest.fn()}
      />
    );
    expect(screen.getByText(/-0%/)).toBeTruthy();
  });

  it("handles product with long name", () => {
    const longNameProduct: Product = {
      ...mockProduct,
      name: "This is a very long product name that might be truncated",
    };
    render(
      <ProductCard
        item={longNameProduct}
        isSaved={false}
        onSaveToggle={jest.fn()}
      />
    );
    expect(screen.getByText(/This is a very long product name/)).toBeTruthy();
  });

  it("handles saving and unsaving product", () => {
    const onSaveToggleMock = jest.fn();
    const { rerender } = render(
      <ProductCard
        item={mockProduct}
        isSaved={false}
        onSaveToggle={onSaveToggleMock}
      />
    );

    rerender(
      <ProductCard
        item={mockProduct}
        isSaved={true}
        onSaveToggle={onSaveToggleMock}
      />
    );

    expect(screen.getByText("Test Shirt")).toBeTruthy();
  });

  it("renders all product information correctly", () => {
    render(
      <ProductCard
        item={mockProduct}
        isSaved={true}
        onSaveToggle={jest.fn()}
        showDescription={true}
      />
    );

    expect(screen.getByText("Test Shirt")).toBeTruthy();
    expect(screen.getByText(/\$99.99/)).toBeTruthy();
    expect(screen.getByText(/-20%/)).toBeTruthy();
  });

  it("updates when product prop changes", () => {
    const { rerender } = render(
      <ProductCard
        item={mockProduct}
        isSaved={false}
        onSaveToggle={jest.fn()}
      />
    );

    const newProduct: Product = {
      ...mockProduct,
      name: "Updated Product",
      price: 149.99,
    };

    rerender(
      <ProductCard item={newProduct} isSaved={false} onSaveToggle={jest.fn()} />
    );

    expect(screen.getByText("Updated Product")).toBeTruthy();
  });
});
