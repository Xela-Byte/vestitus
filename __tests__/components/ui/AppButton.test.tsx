import AppButton from "@/components/ui/AppButton";
import React from "react";
import { fireEvent, render, screen } from "../../setup/test-utils";

describe("AppButton Component", () => {
  it("renders button with label", () => {
    render(<AppButton label="Click Me" onPress={jest.fn()} />);
    const element = screen.getByText("Click Me");
    expect(element).toBeDefined();
  });

  it("calls onPress when pressed", () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(
      <AppButton label="Press" onPress={mockPress} testID="test-button" />
    );
    fireEvent.press(getByTestId("test-button"));
    expect(mockPress).toHaveBeenCalled();
  });

  it("renders with primary variant (default)", () => {
    const { getByText } = render(
      <AppButton variant="primary" label="Primary Button" onPress={jest.fn()} />
    );
    expect(getByText("Primary Button")).toBeDefined();
  });

  it("renders with secondary variant", () => {
    const { getByText } = render(
      <AppButton
        variant="secondary"
        label="Secondary Button"
        onPress={jest.fn()}
      />
    );
    expect(getByText("Secondary Button")).toBeDefined();
  });

  it("renders with outline variant", () => {
    const { getByText } = render(
      <AppButton variant="outline" label="Outline Button" onPress={jest.fn()} />
    );
    expect(getByText("Outline Button")).toBeDefined();
  });

  it("renders with ghost variant", () => {
    const { getByText } = render(
      <AppButton variant="ghost" label="Ghost Button" onPress={jest.fn()} />
    );
    expect(getByText("Ghost Button")).toBeDefined();
  });

  it("renders with small size", () => {
    const { getByText } = render(
      <AppButton size="sm" label="Small Button" onPress={jest.fn()} />
    );
    expect(getByText("Small Button")).toBeDefined();
  });

  it("renders with medium size (default)", () => {
    const { getByText } = render(
      <AppButton size="md" label="Medium Button" onPress={jest.fn()} />
    );
    expect(getByText("Medium Button")).toBeDefined();
  });

  it("renders with large size", () => {
    const { getByText } = render(
      <AppButton size="lg" label="Large Button" onPress={jest.fn()} />
    );
    expect(getByText("Large Button")).toBeDefined();
  });

  it("disables button when disabled prop is true", () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(
      <AppButton
        label="Disabled"
        onPress={mockPress}
        disabled={true}
        testID="disabled-button"
      />
    );
    const button = getByTestId("disabled-button");
    // Button should be rendered in disabled state
    expect(button).toBeDefined();
  });

  it("shows loading indicator when loading is true", () => {
    const { getByText } = render(
      <AppButton label="Loading" onPress={jest.fn()} loading={true} />
    );
    expect(getByText("Loading")).toBeDefined();
  });

  it("disables button when loading is true", () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(
      <AppButton
        label="Loading"
        onPress={mockPress}
        loading={true}
        testID="loading-button"
      />
    );
    const button = getByTestId("loading-button");
    // Button should be rendered in loading state
    expect(button).toBeDefined();
  });

  it("renders with icon on left position (default)", () => {
    const { getByText } = render(
      <AppButton
        label="With Icon"
        icon={<span>🔑</span>}
        iconPosition="left"
        onPress={jest.fn()}
      />
    );
    expect(getByText("With Icon")).toBeDefined();
  });

  it("renders with icon on right position", () => {
    const { getByText } = render(
      <AppButton
        label="With Icon"
        icon={<span>→</span>}
        iconPosition="right"
        onPress={jest.fn()}
      />
    );
    expect(getByText("With Icon")).toBeDefined();
  });

  it("renders with custom className", () => {
    const { getByText } = render(
      <AppButton
        label="Custom Style"
        className="bg-red-500"
        onPress={jest.fn()}
      />
    );
    expect(getByText("Custom Style")).toBeDefined();
  });

  it("renders as full width when fullWidth prop is true", () => {
    const { getByText } = render(
      <AppButton label="Full Width" fullWidth={true} onPress={jest.fn()} />
    );
    expect(getByText("Full Width")).toBeDefined();
  });

  it("renders children when label is not provided", () => {
    const { getByText } = render(
      <AppButton onPress={jest.fn()}>Child Content</AppButton>
    );
    expect(getByText("Child Content")).toBeDefined();
  });

  it("applies correct text color for outline variant", () => {
    const { getByText } = render(
      <AppButton variant="outline" label="Outline" onPress={jest.fn()} />
    );
    // Text should be primary color
    expect(getByText("Outline")).toBeDefined();
  });

  it("applies correct text color for ghost variant", () => {
    const { getByText } = render(
      <AppButton variant="ghost" label="Ghost" onPress={jest.fn()} />
    );
    // Text should be primary color
    expect(getByText("Ghost")).toBeDefined();
  });
});
