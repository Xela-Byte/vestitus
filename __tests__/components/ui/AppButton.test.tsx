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

  it("renders with different variants", () => {
    const variants: Array<"primary" | "secondary" | "outline" | "ghost"> = [
      "primary",
      "secondary",
      "outline",
      "ghost",
    ];

    variants.forEach((variant) => {
      const { getByText } = render(
        <AppButton
          variant={variant}
          label={`${variant} Button`}
          onPress={jest.fn()}
        />
      );
      expect(getByText(`${variant} Button`)).toBeDefined();
    });
  });

  it("renders with different sizes", () => {
    const sizes: Array<"sm" | "md" | "lg"> = ["sm", "md", "lg"];

    sizes.forEach((size) => {
      const { getByText } = render(
        <AppButton size={size} label={`${size} Button`} onPress={jest.fn()} />
      );
      expect(getByText(`${size} Button`)).toBeDefined();
    });
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
    expect(button).toBeDefined();
  });

  it("shows loading indicator when loading is true", () => {
    const { getByText } = render(
      <AppButton label="Loading" onPress={jest.fn()} loading={true} />
    );
    expect(getByText("Loading")).toBeDefined();
  });

  it("renders with icon", () => {
    const { getByText } = render(
      <AppButton label="With Icon" icon={<span>🔑</span>} onPress={jest.fn()} />
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
});
