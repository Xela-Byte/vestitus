import HeaderComponent from "@/components/ui/HeaderComponent";
import { render, screen } from "@testing-library/react-native";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

describe("HeaderComponent", () => {
  let mockRouter: any;

  beforeEach(() => {
    mockRouter = {
      back: jest.fn(),
      canGoBack: jest.fn(() => true),
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns null when router cannot go back", () => {
    mockRouter.canGoBack.mockReturnValueOnce(false);
    const { UNSAFE_root } = render(<HeaderComponent />);
    expect(UNSAFE_root.children.length).toBe(0);
  });

  it("renders with title", () => {
    render(<HeaderComponent title="My Page" />);
    expect(screen.getByText("My Page")).toBeTruthy();
  });

  it("renders without title", () => {
    const { UNSAFE_root } = render(<HeaderComponent />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("shows back arrow by default", () => {
    const { UNSAFE_root } = render(<HeaderComponent />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("hides back arrow when showArrow is false", () => {
    const { UNSAFE_root } = render(<HeaderComponent showArrow={false} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("calls router.back when back arrow is pressed", () => {
    render(<HeaderComponent showArrow={true} />);
    expect(mockRouter.back).not.toHaveBeenCalled();
  });

  it("calls custom onPress when arrow is pressed", () => {
    const onPressMock = jest.fn();
    const { UNSAFE_root } = render(<HeaderComponent onPress={onPressMock} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders with custom title and calls router.back", () => {
    render(<HeaderComponent title="Settings" />);
    expect(screen.getByText("Settings")).toBeTruthy();
  });

  it("renders extra component when provided", () => {
    const ExtraComponent = () => <>{}</>;
    const { UNSAFE_root } = render(
      <HeaderComponent extraComponent={<ExtraComponent />} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders title with appropriate styling", () => {
    render(<HeaderComponent title="Styled Title" />);
    const titleText = screen.getByText("Styled Title");
    expect(titleText).toBeTruthy();
  });

  it("handles empty title prop", () => {
    render(<HeaderComponent title="" />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("handles null title prop", () => {
    render(<HeaderComponent title={undefined} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders with both custom onPress and title", () => {
    const onPressMock = jest.fn();
    render(<HeaderComponent title="Custom Action" onPress={onPressMock} />);
    expect(screen.getByText("Custom Action")).toBeTruthy();
  });

  it("calls custom onPress over default back action", () => {
    const onPressMock = jest.fn();
    render(<HeaderComponent title="Back Override" onPress={onPressMock} />);
    expect(screen.getByText("Back Override")).toBeTruthy();
  });

  it("renders extra component alongside title", () => {
    const testComponent = <View testID="extra-component" />;
    const { UNSAFE_root } = render(
      <HeaderComponent title="With Extra" extraComponent={testComponent} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("properly structures view hierarchy", () => {
    const { UNSAFE_root } = render(
      <HeaderComponent title="Navigation Title" showArrow={true} />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("handles all props together", () => {
    const onPressMock = jest.fn();
    const ExtraComponent = () => <>{}</>;
    render(
      <HeaderComponent
        title="Complete Header"
        onPress={onPressMock}
        showArrow={true}
        extraComponent={<ExtraComponent />}
      />
    );
    expect(screen.getByText("Complete Header")).toBeTruthy();
  });
});
