import OrderCard from "@/components/order/OrderCard";
import { Order } from "@/types/order";
import { render, screen } from "@testing-library/react-native";
import React from "react";

// Mock the ReviewBottomSheet component
jest.mock("@/components/order/ReviewBottomSheet", () => {
  return function MockReviewBottomSheet() {
    return null;
  };
});

// Mock the helper functions
jest.mock("@/utils/helpers/order", () => ({
  getStatusColor: jest.fn((status) => {
    const colors: Record<string, string> = {
      pending: "#FFA500",
      shipped: "#1A1A1A",
      delivered: "#0C9409",
      cancelled: "#EF4444",
    };
    return colors[status] || "#808080";
  }),
  getStatusLabel: jest.fn(
    (status) => status.charAt(0).toUpperCase() + status.slice(1)
  ),
}));

// Mock expo-router Link
jest.mock("expo-router", () => ({
  Link: ({ children }: any) => children,
}));

describe("OrderCard", () => {
  const mockOrder: Order = {
    id: "order-1",
    orderNumber: "ORD001",
    status: "pending",
    totalAmount: 99.99,
    items: [
      {
        id: "item-1",
        productName: "Test Product",
        imageUrl: "test-image.jpg",
        quantity: 1,
        price: 99.99,
      },
    ],
    activities: [],
    createdAt: new Date(),
  };

  it("renders order card component", () => {
    render(<OrderCard order={mockOrder} />);
    expect(screen.getByText(/Order #ORD001/)).toBeDefined();
  });

  it("displays order number", () => {
    render(<OrderCard order={mockOrder} />);
    expect(screen.getByText(/ORD001/)).toBeDefined();
  });

  it("displays order status", () => {
    render(<OrderCard order={mockOrder} />);
    expect(screen.getByText(/Pending/)).toBeDefined();
  });

  it("displays product name", () => {
    render(<OrderCard order={mockOrder} />);
    expect(screen.getByText(/Test Product/)).toBeDefined();
  });

  it("displays total amount", () => {
    render(<OrderCard order={mockOrder} />);
    expect(screen.getByText(/99.99/)).toBeDefined();
  });

  it("displays quantity information", () => {
    render(<OrderCard order={mockOrder} />);
    expect(screen.getByText(/Qty: 1/)).toBeDefined();
  });

  it("shows multiple items count when applicable", () => {
    const orderWithMultipleItems: Order = {
      ...mockOrder,
      items: [
        ...mockOrder.items,
        {
          id: "item-2",
          productName: "Another Product",
          imageUrl: "another-image.jpg",
          quantity: 2,
          price: 49.99,
        },
      ],
    };

    render(<OrderCard order={orderWithMultipleItems} />);
    expect(screen.getByText(/\+1 more item/)).toBeDefined();
  });

  it("displays correct item count calculation", () => {
    const orderWithQtyMultiple: Order = {
      ...mockOrder,
      items: [
        {
          id: "item-1",
          productName: "Product 1",
          imageUrl: "image1.jpg",
          quantity: 3,
          price: 50.0,
        },
        {
          id: "item-2",
          productName: "Product 2",
          imageUrl: "image2.jpg",
          quantity: 2,
          price: 24.99,
        },
      ],
    };

    render(<OrderCard order={orderWithQtyMultiple} />);
    expect(screen.getByText(/Qty: 5/)).toBeDefined();
  });

  it("calls onReviewSubmit callback when provided", () => {
    const mockCallback = jest.fn();
    render(<OrderCard order={mockOrder} onReviewSubmit={mockCallback} />);
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it("renders with different order statuses", () => {
    const shippedOrder: Order = { ...mockOrder, status: "shipped" };
    render(<OrderCard order={shippedOrder} />);
    expect(screen.getByText(/Shipped/)).toBeDefined();
  });

  it("displays correct status for delivered orders", () => {
    const deliveredOrder: Order = { ...mockOrder, status: "delivered" };
    render(<OrderCard order={deliveredOrder} />);
    expect(screen.getByText(/Delivered/)).toBeDefined();
  });

  it("maintains component structure", () => {
    const { UNSAFE_root } = render(<OrderCard order={mockOrder} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders consistently with same props", () => {
    const { rerender } = render(<OrderCard order={mockOrder} />);
    expect(screen.getByText(/ORD001/)).toBeDefined();

    rerender(<OrderCard order={mockOrder} />);
    expect(screen.getByText(/ORD001/)).toBeDefined();
  });

  it("handles orders with no review", () => {
    const orderWithoutReview: Order = {
      ...mockOrder,
      status: "delivered",
    };
    render(<OrderCard order={orderWithoutReview} />);
    expect(screen.getByText(/ORD001/)).toBeDefined();
  });
});
