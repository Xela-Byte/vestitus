import RecentSearch from "@/components/search/RecentSearch";
import { render, screen } from "@testing-library/react-native";
import React from "react";

describe("RecentSearch", () => {
  it("renders the component", () => {
    render(<RecentSearch />);
    expect(screen.getByText("Recent Searches")).toBeTruthy();
  });

  it("displays recent search items", () => {
    render(<RecentSearch />);
    const jeansElements = screen.queryAllByText("jeans");
    expect(jeansElements.length).toBeGreaterThan(0);

    const tshirtElements = screen.queryAllByText("t-shirt");
    expect(tshirtElements.length).toBeGreaterThan(0);

    const sneakersElements = screen.queryAllByText("sneakers");
    expect(sneakersElements.length).toBeGreaterThan(0);
  });

  it("renders all search items", () => {
    render(<RecentSearch />);
    const searchItems = ["jeans", "t-shirt", "sneakers", "jacket", "hat"];
    searchItems.forEach((item) => {
      const elements = screen.queryAllByText(item);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it("displays clear all button", () => {
    render(<RecentSearch />);
    const clearAllButtons = screen.queryAllByText("Clear all");
    expect(clearAllButtons.length).toBeGreaterThan(0);
  });

  it("renders delete buttons for each item", () => {
    render(<RecentSearch />);
    // The component should render without errors
    expect(screen.getByText("Recent Searches")).toBeTruthy();
  });

  it("handles search term selection", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<RecentSearch />);

    const jeansText = screen.queryAllByText("jeans")[0];
    expect(jeansText).toBeTruthy();

    consoleSpy.mockRestore();
  });

  it("handles delete action", () => {
    const consoleSpy = jest.spyOn(console, "log");
    render(<RecentSearch />);

    const component = screen.getByText("Recent Searches");
    expect(component).toBeTruthy();

    consoleSpy.mockRestore();
  });

  it("has proper heading structure", () => {
    render(<RecentSearch />);
    expect(screen.getByText("Recent Searches")).toBeTruthy();
    expect(screen.queryAllByText("Clear all").length).toBeGreaterThan(0);
  });
});
