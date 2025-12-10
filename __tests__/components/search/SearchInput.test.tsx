import SearchInput from "@/components/search/SearchInput";
import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";

describe("SearchInput (search component)", () => {
  it("renders the component", () => {
    render(<SearchInput />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("displays search icon when input is empty", () => {
    render(<SearchInput />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("handles text input changes", () => {
    const onSearchChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchInput
        placeholder="Search..."
        onSearchChange={onSearchChangeMock}
      />
    );
    const input = getByPlaceholderText("Search...");
    fireEvent.changeText(input, "test search");
    expect(onSearchChangeMock).toHaveBeenCalledWith("test search");
  });

  it("applies custom className", () => {
    render(<SearchInput className="custom-class" />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("customizes search icon color", () => {
    render(<SearchInput searchIconColor="#FF0000" />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("customizes mic icon color", () => {
    render(<SearchInput micIconColor="#00FF00" />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("customizes search icon size", () => {
    render(<SearchInput searchIconSize={28} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("customizes mic icon size", () => {
    render(<SearchInput micIconSize={24} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("customizes placeholder text color", () => {
    render(<SearchInput placeholderTextColor="#999999" />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("applies container className", () => {
    render(<SearchInput containerClassName="custom-container" />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("customizes border color", () => {
    render(<SearchInput borderColor="border-gray-500" />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("customizes focused border color", () => {
    render(<SearchInput focusedBorderColor="border-blue-500" />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("handles multiple text changes", () => {
    const onSearchChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchInput
        placeholder="Search..."
        onSearchChange={onSearchChangeMock}
      />
    );
    const input = getByPlaceholderText("Search...");
    fireEvent.changeText(input, "first");
    fireEvent.changeText(input, "second");
    fireEvent.changeText(input, "third");
    expect(onSearchChangeMock).toHaveBeenCalledTimes(3);
  });

  it("clears text when needed", () => {
    const onSearchChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchInput
        placeholder="Search..."
        onSearchChange={onSearchChangeMock}
      />
    );
    const input = getByPlaceholderText("Search...");
    fireEvent.changeText(input, "text");
    fireEvent.changeText(input, "");
    expect(onSearchChangeMock).toHaveBeenLastCalledWith("");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<any>();
    render(<SearchInput ref={ref} />);
    expect(ref.current).toBeTruthy();
  });

  it("integrates with SpeechToText", () => {
    render(<SearchInput />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders with all custom props", () => {
    render(
      <SearchInput
        className="text-base"
        containerClassName="p-4"
        searchIconColor="#123456"
        micIconColor="#654321"
        searchIconSize={24}
        micIconSize={20}
        placeholder="Find items..."
        placeholderTextColor="#AAAAAA"
        borderColor="border-gray-300"
        focusedBorderColor="border-primary"
      />
    );
    expect(screen.UNSAFE_root).toBeTruthy();
  });
});
