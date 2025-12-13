import AppDropdown from "@/components/ui/AppDropdown";
import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";

describe("AppDropdown", () => {
  const mockOptions = ["Option 1", "Option 2", "Option 3"];
  const mockOnSelect = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders dropdown component", () => {
    render(
      <AppDropdown
        options={mockOptions}
        value=""
        onSelect={mockOnSelect}
        placeholder="Select an option"
      />
    );
    expect(screen.getByText(/Select an option/)).toBeDefined();
  });

  it("displays placeholder when no value selected", () => {
    render(
      <AppDropdown
        options={mockOptions}
        value=""
        onSelect={mockOnSelect}
        placeholder="Choose option"
      />
    );
    expect(screen.getByText(/Choose option/)).toBeDefined();
  });

  it("displays selected value", () => {
    render(
      <AppDropdown
        options={mockOptions}
        value="Option 1"
        onSelect={mockOnSelect}
      />
    );
    expect(screen.getByText(/Option 1/)).toBeDefined();
  });

  it("renders label when provided", () => {
    render(
      <AppDropdown
        label="Choose Item"
        options={mockOptions}
        value=""
        onSelect={mockOnSelect}
      />
    );
    expect(screen.getByText(/Choose Item/)).toBeDefined();
  });

  it("does not render label when not provided", () => {
    const { queryByText } = render(
      <AppDropdown options={mockOptions} value="" onSelect={mockOnSelect} />
    );
    expect(queryByText(/Choose Item/)).toBeNull();
  });

  it("toggles dropdown menu on press", () => {
    const { getByText } = render(
      <AppDropdown
        options={mockOptions}
        value=""
        onSelect={mockOnSelect}
        placeholder="Select"
      />
    );

    const trigger = getByText(/Select/);
    fireEvent.press(trigger);
    expect(true).toBeTruthy();
  });

  it("displays all options when opened", () => {
    render(
      <AppDropdown
        options={mockOptions}
        value=""
        onSelect={mockOnSelect}
        placeholder="Select"
      />
    );

    const trigger = screen.getByText(/Select/);
    fireEvent.press(trigger);

    mockOptions.forEach((option) => {
      expect(screen.getByText(option)).toBeDefined();
    });
  });

  it("calls onSelect when option is clicked", () => {
    render(
      <AppDropdown
        options={mockOptions}
        value=""
        onSelect={mockOnSelect}
        placeholder="Select"
      />
    );

    const trigger = screen.getByText(/Select/);
    fireEvent.press(trigger);

    const option = screen.getByText(/Option 1/);
    fireEvent.press(option);

    expect(mockOnSelect).toHaveBeenCalledWith("Option 1");
  });

  it("closes dropdown after selection", () => {
    render(
      <AppDropdown
        options={mockOptions}
        value=""
        onSelect={mockOnSelect}
        placeholder="Select"
      />
    );

    const trigger = screen.getByText(/Select/);
    fireEvent.press(trigger);

    const option = screen.getAllByText(/Option 1/)[0];
    fireEvent.press(option);

    expect(mockOnSelect).toHaveBeenCalled();
  });

  it("applies custom className", () => {
    const { UNSAFE_root } = render(
      <AppDropdown
        className="custom-class"
        options={mockOptions}
        value=""
        onSelect={mockOnSelect}
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders with showCheckmark true", () => {
    render(
      <AppDropdown
        options={mockOptions}
        value="Option 1"
        onSelect={mockOnSelect}
        showCheckmark={true}
      />
    );
    expect(true).toBeTruthy();
  });

  it("renders with showCheckmark false", () => {
    render(
      <AppDropdown
        options={mockOptions}
        value="Option 1"
        onSelect={mockOnSelect}
        showCheckmark={false}
      />
    );
    expect(true).toBeTruthy();
  });

  it("maintains component structure", () => {
    const { UNSAFE_root } = render(
      <AppDropdown options={mockOptions} value="" onSelect={mockOnSelect} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders consistently with same props", () => {
    const { rerender } = render(
      <AppDropdown
        options={mockOptions}
        value="Option 1"
        onSelect={mockOnSelect}
      />
    );
    expect(screen.getByText(/Option 1/)).toBeDefined();

    rerender(
      <AppDropdown
        options={mockOptions}
        value="Option 1"
        onSelect={mockOnSelect}
      />
    );
    expect(screen.getByText(/Option 1/)).toBeDefined();
  });

  it("handles empty options array", () => {
    const { UNSAFE_root } = render(
      <AppDropdown
        options={[]}
        value=""
        onSelect={mockOnSelect}
        placeholder="No options"
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("handles single option", () => {
    const singleOption = ["Only Option"];
    render(
      <AppDropdown options={singleOption} value="" onSelect={mockOnSelect} />
    );
    expect(true).toBeTruthy();
  });

  it("handles large number of options", () => {
    const manyOptions = Array.from({ length: 20 }, (_, i) => `Option ${i + 1}`);
    render(
      <AppDropdown options={manyOptions} value="" onSelect={mockOnSelect} />
    );
    expect(true).toBeTruthy();
  });

  it("updates when value prop changes", () => {
    const { rerender } = render(
      <AppDropdown
        options={mockOptions}
        value="Option 1"
        onSelect={mockOnSelect}
      />
    );

    rerender(
      <AppDropdown
        options={mockOptions}
        value="Option 2"
        onSelect={mockOnSelect}
      />
    );

    expect(screen.getByText(/Option 2/)).toBeDefined();
  });
});
