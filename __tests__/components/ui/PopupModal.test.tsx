import PopupModal from "@/components/ui/PopupModal";
import { render, screen } from "@testing-library/react-native";
import React from "react";

describe("PopupModal", () => {
  it("renders when visible is true", () => {
    render(
      <PopupModal visible={true} onClose={jest.fn()} title="Test Modal" />
    );
    expect(screen.getByText("Test Modal")).toBeTruthy();
  });

  it("does not render when visible is false", () => {
    const { UNSAFE_root } = render(
      <PopupModal visible={false} onClose={jest.fn()} title="Test Modal" />
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("displays title when provided", () => {
    render(
      <PopupModal visible={true} onClose={jest.fn()} title="Modal Title" />
    );
    expect(screen.getByText("Modal Title")).toBeTruthy();
  });

  it("displays description when provided", () => {
    render(
      <PopupModal
        visible={true}
        onClose={jest.fn()}
        title="Title"
        description="Modal description text"
      />
    );
    expect(screen.getByText("Modal description text")).toBeTruthy();
  });

  it("renders children content", () => {
    const { UNSAFE_root } = render(
      <PopupModal visible={true} onClose={jest.fn()} title="Title">
        <>Content</>
      </PopupModal>
    );
    expect(UNSAFE_root).toBeTruthy();
  });

  it("calls onClose when close button is pressed", () => {
    const onCloseMock = jest.fn();
    render(
      <PopupModal
        visible={true}
        onClose={onCloseMock}
        title="Title"
        showCloseButton={true}
      />
    );
    expect(onCloseMock).toHaveBeenCalledTimes(0);
  });

  it("renders primary action button", () => {
    const primaryActionMock = jest.fn();
    render(
      <PopupModal
        visible={true}
        onClose={jest.fn()}
        title="Title"
        primaryAction={{
          label: "Confirm",
          onPress: primaryActionMock,
        }}
      />
    );
    expect(screen.getByText("Confirm")).toBeTruthy();
  });

  it("renders secondary action button", () => {
    const secondaryActionMock = jest.fn();
    render(
      <PopupModal
        visible={true}
        onClose={jest.fn()}
        title="Title"
        secondaryAction={{
          label: "Cancel",
          onPress: secondaryActionMock,
        }}
      />
    );
    expect(screen.getByText("Cancel")).toBeTruthy();
  });

  it("renders both primary and secondary action buttons", () => {
    render(
      <PopupModal
        visible={true}
        onClose={jest.fn()}
        title="Title"
        primaryAction={{
          label: "Yes",
          onPress: jest.fn(),
        }}
        secondaryAction={{
          label: "No",
          onPress: jest.fn(),
        }}
      />
    );
    expect(screen.getByText("Yes")).toBeTruthy();
    expect(screen.getByText("No")).toBeTruthy();
  });

  it("shows loading state on primary action", () => {
    render(
      <PopupModal
        visible={true}
        onClose={jest.fn()}
        title="Title"
        primaryAction={{
          label: "Loading",
          onPress: jest.fn(),
          loading: true,
        }}
      />
    );
    expect(screen.getByText("Loading")).toBeTruthy();
  });

  it("disables primary action when disabled is true", () => {
    render(
      <PopupModal
        visible={true}
        onClose={jest.fn()}
        title="Title"
        primaryAction={{
          label: "Disabled",
          onPress: jest.fn(),
          disabled: true,
        }}
      />
    );
    expect(screen.getByText("Disabled")).toBeTruthy();
  });

  it("renders with small size variant", () => {
    render(
      <PopupModal
        visible={true}
        onClose={jest.fn()}
        title="Small Modal"
        size="sm"
      />
    );
    expect(screen.getByText("Small Modal")).toBeTruthy();
  });

  it("renders with medium size variant", () => {
    render(
      <PopupModal
        visible={true}
        onClose={jest.fn()}
        title="Medium Modal"
        size="md"
      />
    );
    expect(screen.getByText("Medium Modal")).toBeTruthy();
  });

  it("renders with large size variant", () => {
    render(
      <PopupModal
        visible={true}
        onClose={jest.fn()}
        title="Large Modal"
        size="lg"
      />
    );
    expect(screen.getByText("Large Modal")).toBeTruthy();
  });

  it("applies custom container className", () => {
    render(
      <PopupModal
        visible={true}
        onClose={jest.fn()}
        title="Title"
        containerClassName="custom-container"
      />
    );
    expect(screen.getByText("Title")).toBeTruthy();
  });

  it("applies custom content className", () => {
    render(
      <PopupModal
        visible={true}
        onClose={jest.fn()}
        title="Title"
        contentClassName="custom-content"
      />
    );
    expect(screen.getByText("Title")).toBeTruthy();
  });

  it("hides close button when showCloseButton is false", () => {
    render(
      <PopupModal
        visible={true}
        onClose={jest.fn()}
        title="Title"
        showCloseButton={false}
      />
    );
    expect(screen.getByText("Title")).toBeTruthy();
  });

  it("shows close button by default", () => {
    render(<PopupModal visible={true} onClose={jest.fn()} title="Title" />);
    expect(screen.getByText("Title")).toBeTruthy();
  });

  it("renders complete modal with all features", () => {
    render(
      <PopupModal
        visible={true}
        onClose={jest.fn()}
        title="Complete Modal"
        description="Full featured modal"
        primaryAction={{
          label: "Accept",
          onPress: jest.fn(),
        }}
        secondaryAction={{
          label: "Reject",
          onPress: jest.fn(),
        }}
        showCloseButton={true}
        size="md"
      >
        <>Extra content</>
      </PopupModal>
    );
    expect(screen.getByText("Complete Modal")).toBeTruthy();
    expect(screen.getByText("Full featured modal")).toBeTruthy();
    expect(screen.getByText("Accept")).toBeTruthy();
    expect(screen.getByText("Reject")).toBeTruthy();
  });
});
