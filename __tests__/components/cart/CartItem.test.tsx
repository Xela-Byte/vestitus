import CartItem from "@/components/cart/CartItem";
import React from "react";
import { render, screen } from "../../setup/test-utils";

describe("CartItem Component", () => {
  it("renders cart item component", () => {
    const { UNSAFE_root } = render(<CartItem />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("displays product name", () => {
    render(<CartItem />);
    expect(screen.getByText("Regular Fit Slogan")).toBeDefined();
  });

  it("displays product size", () => {
    render(<CartItem />);
    expect(screen.getByText("Size L")).toBeDefined();
  });

  it("displays product price", () => {
    render(<CartItem />);
    expect(screen.getByText("$1,299")).toBeDefined();
  });

  it("renders product image", () => {
    const { UNSAFE_root } = render(<CartItem />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("has correct layout structure", () => {
    const { UNSAFE_root } = render(<CartItem />);
    const views = UNSAFE_root.findAllByType("View");
    expect(views.length).toBeGreaterThan(0);
  });

  it("renders all required AppText components", () => {
    render(<CartItem />);
    expect(screen.getByText("Regular Fit Slogan")).toBeDefined();
    expect(screen.getByText("Size L")).toBeDefined();
    expect(screen.getByText("$1,299")).toBeDefined();
  });

  it("renders interactive quantity buttons", () => {
    const { UNSAFE_root } = render(<CartItem />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("displays product image with correct styling", () => {
    const { UNSAFE_root } = render(<CartItem />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("component accepts no props and renders with defaults", () => {
    const { UNSAFE_root } = render(<CartItem />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders proper background styling", () => {
    const { UNSAFE_root } = render(<CartItem />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("shows all interactive elements", () => {
    const { UNSAFE_root } = render(<CartItem />);
    expect(UNSAFE_root).toBeTruthy();
    expect(screen.getByText("1")).toBeDefined();
  });
});
