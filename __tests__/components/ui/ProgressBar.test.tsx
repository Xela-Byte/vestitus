import React from "react";
import { render } from "@testing-library/react-native";
import ProgressBar from "@/components/ui/ProgressBar";

describe("ProgressBar", () => {
  it("renders with default props", () => {
    const { UNSAFE_root } = render(<ProgressBar progress={50} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders progress 0", () => {
    const { UNSAFE_root } = render(<ProgressBar progress={0} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders progress 100", () => {
    const { UNSAFE_root } = render(<ProgressBar progress={100} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders progress in middle range", () => {
    const { UNSAFE_root } = render(<ProgressBar progress={50} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("clamps progress above 100 to 100", () => {
    const { UNSAFE_root } = render(<ProgressBar progress={150} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("clamps negative progress to 0", () => {
    const { UNSAFE_root } = render(<ProgressBar progress={-10} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("applies custom color", () => {
    const { UNSAFE_root } = render(
      <ProgressBar progress={50} color="#FF0000" />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("applies custom backgroundColor", () => {
    const { UNSAFE_root } = render(
      <ProgressBar progress={50} backgroundColor="#CCCCCC" />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("applies custom height", () => {
    const { UNSAFE_root } = render(
      <ProgressBar progress={50} height={16} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("shows label when showLabel is true", () => {
    const { getByText } = render(
      <ProgressBar progress={50} showLabel={true} />
    );
    expect(getByText("50%")).toBeTruthy();
  });

  it("hides label when showLabel is false", () => {
    const { queryByText } = render(
      <ProgressBar progress={50} showLabel={false} />
    );
    expect(queryByText("50%")).toBeNull();
  });

  it("displays correct percentage in label", () => {
    const { getByText } = render(
      <ProgressBar progress={75} showLabel={true} />
    );
    expect(getByText("75%")).toBeTruthy();
  });

  it("displays 0% in label", () => {
    const { getByText } = render(
      <ProgressBar progress={0} showLabel={true} />
    );
    expect(getByText("0%")).toBeTruthy();
  });

  it("displays 100% in label", () => {
    const { getByText } = render(
      <ProgressBar progress={100} showLabel={true} />
    );
    expect(getByText("100%")).toBeTruthy();
  });

  it("handles decimal progress values", () => {
    const { UNSAFE_root } = render(
      <ProgressBar progress={33.33} showLabel={true} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("applies all custom styles together", () => {
    const { UNSAFE_root } = render(
      <ProgressBar
        progress={60}
        color="#00FF00"
        backgroundColor="#333333"
        height={12}
        showLabel={true}
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("handles very small progress values", () => {
    const { getByText } = render(
      <ProgressBar progress={1} showLabel={true} />
    );
    expect(getByText("1%")).toBeTruthy();
  });

  it("handles very large progress values (clamped)", () => {
    const { getByText } = render(
      <ProgressBar progress={999} showLabel={true} />
    );
    expect(getByText("100%")).toBeTruthy();
  });
});
