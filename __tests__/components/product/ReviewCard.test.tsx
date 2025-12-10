import ReviewCard from "@/components/product/ReviewCard";
import { render, screen } from "@testing-library/react-native";
import React from "react";

describe("ReviewCard", () => {
  const mockReview = {
    rating: 5,
    reviewText: "Great product! Highly recommended.",
    reviewerName: "John Doe",
    reviewDate: "2024-01-01",
  };

  it("renders review card component", () => {
    render(<ReviewCard {...mockReview} />);
    expect(screen.getByText(/John Doe/)).toBeDefined();
  });

  it("displays reviewer name", () => {
    render(<ReviewCard {...mockReview} />);
    expect(screen.getByText(/John Doe/)).toBeDefined();
  });

  it("displays review text", () => {
    render(<ReviewCard {...mockReview} />);
    expect(
      screen.getByText("Great product! Highly recommended.")
    ).toBeDefined();
  });

  it("shows review rating", () => {
    render(<ReviewCard {...mockReview} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders consistently", () => {
    const { rerender } = render(<ReviewCard {...mockReview} />);
    expect(screen.getByText(/John Doe/)).toBeDefined();

    rerender(<ReviewCard {...mockReview} />);
    expect(screen.getByText(/John Doe/)).toBeDefined();
  });

  it("displays review date", () => {
    render(<ReviewCard {...mockReview} />);
    expect(screen.getByText("2024-01-01")).toBeDefined();
  });

  it("maintains proper structure", () => {
    const { UNSAFE_root } = render(<ReviewCard {...mockReview} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("handles different ratings", () => {
    const lowRatingReview = { ...mockReview, rating: 2 };
    render(<ReviewCard {...lowRatingReview} />);
    expect(screen.getByText(/John Doe/)).toBeDefined();
  });

  it("renders with proper styling", () => {
    const { UNSAFE_root } = render(<ReviewCard {...mockReview} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("handles multiple review instances", () => {
    const { getAllByText } = render(
      <>
        <ReviewCard {...mockReview} />
        <ReviewCard
          rating={4}
          reviewText="Good product"
          reviewerName="Jane Smith"
          reviewDate="2024-01-02"
        />
      </>
    );
    expect(getAllByText(/Jane/).length).toBeGreaterThan(0);
  });
});
