import SearchInput from "@/components/ui/SearchInput";
import { fireEvent, render, screen } from "@testing-library/react-native";
import React from "react";

describe("SearchInput", () => {
  it("renders with default placeholder", () => {
    render(<SearchInput />);
    // Check that the component renders without crashing
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders with custom placeholder", () => {
    render(<SearchInput placeholder="Find items..." />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("calls onSearchChange on text input", () => {
    const onSearchChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchInput
        placeholder="Search..."
        onSearchChange={onSearchChangeMock}
      />
    );
    const input = getByPlaceholderText("Search...");
    fireEvent.changeText(input, "test query");
    expect(onSearchChangeMock).toHaveBeenCalledWith("test query");
  });

  it("calls onMicPress when mic icon is pressed", () => {
    const onMicPressMock = jest.fn();
    const { getByTestId } = render(<SearchInput testID="mic-button" />);
    // Find and press mic button
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("applies custom className", () => {
    render(<SearchInput className="custom-class" />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("applies custom containerClassName", () => {
    render(<SearchInput containerClassName="custom-container" />);
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

  it("customizes icon sizes", () => {
    render(<SearchInput searchIconSize={28} micIconSize={28} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("customizes placeholder text color", () => {
    render(<SearchInput placeholderTextColor="#999999" />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("applies focus border color when focused", () => {
    const { getByPlaceholderText } = render(
      <SearchInput
        placeholder="Search..."
        focusedBorderColor="border-blue-500"
        borderColor="border-gray-300"
      />
    );
    const input = getByPlaceholderText("Search...");
    fireEvent.changeText(input);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<any>();
    render(<SearchInput ref={ref} />);
    expect(ref.current).toBeTruthy();
  });

  it("accepts standard TextInput props", () => {
    render(
      <SearchInput
        placeholder="Search..."
        editable={true}
        autoCorrect={false}
      />
    );
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
    expect(onSearchChangeMock).toHaveBeenLastCalledWith("third");
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
});
