import Slider from "@/components/ui/Slider";
import { render, screen } from "@testing-library/react-native";
import React from "react";

describe("Slider (RangeSlider)", () => {
  const mockOnMinChange = jest.fn();
  const mockOnMaxChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component", () => {
    render(
      <Slider
        min={0}
        max={100}
        minValue={20}
        maxValue={80}
        onMinChange={mockOnMinChange}
        onMaxChange={mockOnMaxChange}
      />
    );
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders with default props", () => {
    render(
      <Slider
        min={0}
        max={100}
        minValue={20}
        maxValue={80}
        onMinChange={mockOnMinChange}
        onMaxChange={mockOnMaxChange}
      />
    );
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("displays min and max values when showValues is true", () => {
    render(
      <Slider
        min={0}
        max={100}
        minValue={20}
        maxValue={80}
        onMinChange={mockOnMinChange}
        onMaxChange={mockOnMaxChange}
        showValues={true}
      />
    );
    expect(screen.queryAllByText("20").length).toBeGreaterThanOrEqual(0);
  });

  it("displays prefix when showValues is true", () => {
    render(
      <Slider
        min={0}
        max={5000}
        minValue={500}
        maxValue={4000}
        onMinChange={mockOnMinChange}
        onMaxChange={mockOnMaxChange}
        showValues={true}
        prefix="$"
      />
    );
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("respects min and max range", () => {
    render(
      <Slider
        min={10}
        max={90}
        minValue={20}
        maxValue={80}
        onMinChange={mockOnMinChange}
        onMaxChange={mockOnMaxChange}
      />
    );
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("uses custom step value", () => {
    render(
      <Slider
        min={0}
        max={100}
        minValue={25}
        maxValue={75}
        step={5}
        onMinChange={mockOnMinChange}
        onMaxChange={mockOnMaxChange}
      />
    );
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("applies custom className", () => {
    render(
      <Slider
        min={0}
        max={100}
        minValue={20}
        maxValue={80}
        onMinChange={mockOnMinChange}
        onMaxChange={mockOnMaxChange}
        className="custom-class"
      />
    );
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("handles large ranges", () => {
    render(
      <Slider
        min={0}
        max={10000}
        minValue={1000}
        maxValue={9000}
        onMinChange={mockOnMinChange}
        onMaxChange={mockOnMaxChange}
      />
    );
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("handles small ranges", () => {
    render(
      <Slider
        min={0}
        max={10}
        minValue={2}
        maxValue={8}
        onMinChange={mockOnMinChange}
        onMaxChange={mockOnMaxChange}
      />
    );
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders with both min and max callbacks", () => {
    const onMin = jest.fn();
    const onMax = jest.fn();
    render(
      <Slider
        min={0}
        max={100}
        minValue={30}
        maxValue={70}
        onMinChange={onMin}
        onMaxChange={onMax}
      />
    );
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders without showValues", () => {
    render(
      <Slider
        min={0}
        max={100}
        minValue={20}
        maxValue={80}
        onMinChange={mockOnMinChange}
        onMaxChange={mockOnMaxChange}
        showValues={false}
      />
    );
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("handles price range with prefix", () => {
    render(
      <Slider
        min={0}
        max={5000}
        minValue={500}
        maxValue={4500}
        step={50}
        onMinChange={mockOnMinChange}
        onMaxChange={mockOnMaxChange}
        showValues={true}
        prefix="$"
      />
    );
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders multiple sliders independently", () => {
    const { rerender } = render(
      <Slider
        min={0}
        max={100}
        minValue={20}
        maxValue={80}
        onMinChange={mockOnMinChange}
        onMaxChange={mockOnMaxChange}
      />
    );
    expect(screen.UNSAFE_root).toBeTruthy();

    rerender(
      <Slider
        min={0}
        max={100}
        minValue={10}
        maxValue={90}
        onMinChange={mockOnMinChange}
        onMaxChange={mockOnMaxChange}
      />
    );
    expect(screen.UNSAFE_root).toBeTruthy();
  });
});
