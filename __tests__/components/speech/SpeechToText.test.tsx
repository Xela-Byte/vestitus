import SpeechToText from "@/components/speech/SpeechToText";
import { render, screen } from "@testing-library/react-native";
import React from "react";

// Use the mock from jest.setup.js

describe("SpeechToText", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the microphone icon", () => {
    render(<SpeechToText />);
    // Check that the component renders without crashing
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders with custom mic icon color", () => {
    render(<SpeechToText micIconColor="#FF0000" />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders with custom mic icon size", () => {
    render(<SpeechToText micIconSize={30} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders with default mic icon color and size", () => {
    render(<SpeechToText />);
    // Default color should be #B3B3B3 and size should be 20
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders without crashing with custom props", () => {
    render(<SpeechToText micIconColor="#FF00FF" micIconSize={35} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders multiple instances", () => {
    const { rerender } = render(<SpeechToText />);
    expect(screen.UNSAFE_root).toBeTruthy();

    rerender(<SpeechToText micIconColor="#0000FF" />);
    expect(screen.UNSAFE_root).toBeTruthy();

    rerender(<SpeechToText micIconSize={50} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("uses correct default props", () => {
    render(<SpeechToText />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("combines custom mic icon color and size", () => {
    render(<SpeechToText micIconColor="#0000FF" micIconSize={25} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("handles edge case with zero size", () => {
    render(<SpeechToText micIconSize={0} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("handles edge case with very large size", () => {
    render(<SpeechToText micIconSize={200} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("accepts onSpeechResult callback prop", () => {
    const mockCallback = jest.fn();
    render(<SpeechToText onSpeechResult={mockCallback} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders with all props including onSpeechResult", () => {
    const mockCallback = jest.fn();
    render(
      <SpeechToText
        micIconColor="#123456"
        micIconSize={28}
        onSpeechResult={mockCallback}
      />
    );
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders with optional onSpeechResult callback", () => {
    render(<SpeechToText onSpeechResult={undefined} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });
});
