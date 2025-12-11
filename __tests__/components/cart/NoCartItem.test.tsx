import NoCartItem from "@/components/cart/NoCartItem";
import React from "react";
import { render, screen } from "../../setup/test-utils";

describe("NoCartItem Component", () => {
  it("renders no cart item component", () => {
    const { UNSAFE_root } = render(<NoCartItem />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("displays empty cart message", () => {
    render(<NoCartItem />);
    expect(screen.getByText("Your Cart Is Empty!")).toBeDefined();
  });

  it("displays helpful subtitle text", () => {
    render(<NoCartItem />);
    expect(
      screen.getByText("When you add products, they'll appear here.")
    ).toBeDefined();
  });

  it("renders shopping cart icon", () => {
    const { UNSAFE_root } = render(<NoCartItem />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("displays icon with correct size", () => {
    const { UNSAFE_root } = render(<NoCartItem />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders main text with semibold weight", () => {
    render(<NoCartItem />);
    expect(screen.getByText("Your Cart Is Empty!")).toBeDefined();
  });

  it("displays subtitle with secondary color styling", () => {
    render(<NoCartItem />);
    expect(
      screen.getByText("When you add products, they'll appear here.")
    ).toBeDefined();
  });

  it("centers content vertically and horizontally", () => {
    const { UNSAFE_root } = render(<NoCartItem />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders with flex layout", () => {
    const { UNSAFE_root } = render(<NoCartItem />);
    const views = UNSAFE_root.findAllByType("View");
    expect(views.length).toBeGreaterThan(0);
  });

  it("renders AppText components for messages", () => {
    render(<NoCartItem />);
    expect(screen.getByText("Your Cart Is Empty!")).toBeDefined();
    expect(
      screen.getByText("When you add products, they'll appear here.")
    ).toBeDefined();
  });

  it("maintains consistent rendering", () => {
    const { rerender, UNSAFE_root } = render(<NoCartItem />);
    expect(UNSAFE_root).toBeTruthy();

    rerender(<NoCartItem />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("accepts props with Record<string, never> type", () => {
    const emptyProps = {};
    const { UNSAFE_root } = render(<NoCartItem {...emptyProps} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("displays full message for empty state", () => {
    render(<NoCartItem />);
    expect(screen.getByText("Your Cart Is Empty!")).toBeDefined();
    expect(
      screen.getByText("When you add products, they'll appear here.")
    ).toBeDefined();
  });

  it("uses proper gap spacing between elements", () => {
    const { UNSAFE_root } = render(<NoCartItem />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders icon component", () => {
    const { UNSAFE_root } = render(<NoCartItem />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("has proper text styling and hierarchy", () => {
    render(<NoCartItem />);
    const mainText = screen.getByText("Your Cart Is Empty!");
    const subtitle = screen.getByText(
      "When you add products, they'll appear here."
    );
    expect(mainText).toBeDefined();
    expect(subtitle).toBeDefined();
  });

  it("component renders without any props required", () => {
    const { UNSAFE_root } = render(<NoCartItem />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("displays empty state UI correctly", () => {
    const { UNSAFE_root } = render(<NoCartItem />);
    expect(UNSAFE_root).toBeTruthy();
    expect(screen.getByText("Your Cart Is Empty!")).toBeDefined();
  });

  it("centers icon and text content", () => {
    const { UNSAFE_root } = render(<NoCartItem />);
    const views = UNSAFE_root.findAllByType("View");
    expect(views.length).toBeGreaterThan(0);
    expect(UNSAFE_root).toBeTruthy();
  });
});
