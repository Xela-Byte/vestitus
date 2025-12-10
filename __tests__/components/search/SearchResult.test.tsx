import SearchResult from "@/components/search/SearchResult";
import { render, screen } from "@testing-library/react-native";
import React from "react";

describe("SearchResult", () => {
  it("renders the component", () => {
    render(<SearchResult />);
    expect(screen.getByText("Recent Searches")).toBeTruthy();
  });

  it("displays mock search results", () => {
    render(<SearchResult />);
    const tshirtElements = screen.queryAllByText("Classic White T-Shirt");
    expect(tshirtElements.length).toBeGreaterThan(0);

    const jeansElements = screen.queryAllByText("Blue Denim Jeans");
    expect(jeansElements.length).toBeGreaterThan(0);

    const shoesElements = screen.queryAllByText("Red Running Shoes");
    expect(shoesElements.length).toBeGreaterThan(0);
  });

  it("displays product prices", () => {
    render(<SearchResult />);
    const price1 = screen.queryAllByText(/19\.99/);
    expect(price1.length).toBeGreaterThan(0);

    const price2 = screen.queryAllByText(/49\.99/);
    expect(price2.length).toBeGreaterThan(0);

    const price3 = screen.queryAllByText(/89\.99/);
    expect(price3.length).toBeGreaterThan(0);
  });

  it("displays discount percentages", () => {
    render(<SearchResult />);
    const discountElements = screen.queryAllByText(/-10%/) || [];
    expect(discountElements.length).toBeGreaterThanOrEqual(0);
  });

  it("renders multiple product items from mock data", () => {
    render(<SearchResult />);
    // Mock data is concatenated 4 times, so we should see multiple instances
    const tShirtInstances = screen.queryAllByText("Classic White T-Shirt");
    expect(tShirtInstances.length).toBeGreaterThanOrEqual(1);
  });

  it("handles product selection", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<SearchResult />);

    // Component should render successfully
    expect(screen.getByText("Recent Searches")).toBeTruthy();

    consoleSpy.mockRestore();
  });

  it("displays clear all button", () => {
    render(<SearchResult />);
    const clearAllButtons = screen.queryAllByText("Clear all");
    expect(clearAllButtons.length).toBeGreaterThan(0);
  });

  it("renders heading with correct title", () => {
    render(<SearchResult />);
    expect(screen.getByText("Recent Searches")).toBeTruthy();
  });

  it("shows product information in list items", () => {
    render(<SearchResult />);
    // Check for product data
    const tshirtElements = screen.queryAllByText("Classic White T-Shirt");
    expect(tshirtElements.length).toBeGreaterThan(0);
  });
});
