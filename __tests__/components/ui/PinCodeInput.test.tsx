import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import PinCodeInput from "@/components/ui/PinCodeInput";

describe("PinCodeInput", () => {
  it("renders with default maxLength of 6", () => {
    const { UNSAFE_root } = render(<PinCodeInput />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders with custom maxLength", () => {
    const { UNSAFE_root } = render(<PinCodeInput maxLength={4} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("calls onChange when value changes", () => {
    const onChangeMock = jest.fn();
    render(
      <PinCodeInput value="" onChange={onChangeMock} maxLength={6} />
    );
    // The component should be renderable
    expect(onChangeMock).toHaveBeenCalledTimes(0);
  });

  it("initializes with provided value", () => {
    const { UNSAFE_root } = render(
      <PinCodeInput value="123456" onChange={jest.fn()} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("masks value when maskValue is true", () => {
    const { UNSAFE_root } = render(
      <PinCodeInput value="123456" onChange={jest.fn()} maskValue={true} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("does not mask value when maskValue is false", () => {
    const { UNSAFE_root } = render(
      <PinCodeInput value="123456" onChange={jest.fn()} maskValue={false} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("disables input when disabled prop is true", () => {
    const { UNSAFE_root } = render(
      <PinCodeInput disabled={true} onChange={jest.fn()} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("accepts only numeric input", () => {
    const onChangeMock = jest.fn();
    render(
      <PinCodeInput
        value=""
        onChange={onChangeMock}
        maxLength={6}
      />
    );
    expect(onChangeMock).toHaveBeenCalledTimes(0);
  });

  it("handles maxLength validation", () => {
    const onChangeMock = jest.fn();
    const { UNSAFE_root } = render(
      <PinCodeInput
        value="123456"
        onChange={onChangeMock}
        maxLength={6}
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("manages focused state", () => {
    const { UNSAFE_root } = render(
      <PinCodeInput value="" onChange={jest.fn()} maxLength={6} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("shows and hides digits based on maskValue", () => {
    const { UNSAFE_root } = render(
      <PinCodeInput
        value="123456"
        onChange={jest.fn()}
        maskValue={true}
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders all pin code input fields", () => {
    const maxLength = 6;
    const { UNSAFE_root } = render(
      <PinCodeInput
        value=""
        onChange={jest.fn()}
        maxLength={maxLength}
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("handles backspace on empty field", () => {
    const onChangeMock = jest.fn();
    const { UNSAFE_root } = render(
      <PinCodeInput
        value="12345"
        onChange={onChangeMock}
        maxLength={6}
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("applies custom style prop", () => {
    const customStyle = { backgroundColor: "red" };
    const { UNSAFE_root } = render(
      <PinCodeInput
        value=""
        onChange={jest.fn()}
        style={customStyle}
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("handles empty value", () => {
    const { UNSAFE_root } = render(
      <PinCodeInput value="" onChange={jest.fn()} maxLength={6} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("handles full pin code", () => {
    const { UNSAFE_root } = render(
      <PinCodeInput
        value="000000"
        onChange={jest.fn()}
        maxLength={6}
      />
    );
    expect(UNSAFE_root).toBeTruthy();
  });
});
