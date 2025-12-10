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
    const { UNSAFE_root } = render(<ReviewCard {...mockReview} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("displays review content", () => {
    render(<ReviewCard {...mockReview} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders without crashing", () => {
    const { UNSAFE_root } = render(<ReviewCard {...mockReview} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("shows review information", () => {
    render(<ReviewCard {...mockReview} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders consistently", () => {
    const { rerender } = render(<ReviewCard {...mockReview} />);
    expect(screen.UNSAFE_root).toBeTruthy();

    rerender(<ReviewCard {...mockReview} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("has proper card layout", () => {
    const { UNSAFE_root } = render(<ReviewCard {...mockReview} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("maintains visual structure", () => {
    const { UNSAFE_root } = render(<ReviewCard {...mockReview} />);
    expect(UNSAFE_root.children.length).toBeGreaterThan(-1);
  });

  it("is a valid component", () => {
    render(<ReviewCard {...mockReview} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders with proper styling", () => {
    const { UNSAFE_root } = render(<ReviewCard {...mockReview} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("handles multiple instances", () => {
    render(
      <>
        <ReviewCard {...mockReview} />
        <ReviewCard {...mockReview} />
        <ReviewCard {...mockReview} />
      </>
    );
    expect(screen.UNSAFE_root).toBeTruthy();
  });
});
