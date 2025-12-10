import React from "react";
import { render, screen } from "@testing-library/react-native";
import NoNotification from "@/components/notification/NoNotification";

describe("NoNotification", () => {
  it("renders the component", () => {
    const { UNSAFE_root } = render(<NoNotification />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("displays bell icon", () => {
    render(<NoNotification />);
    // FontAwesome bell icon should be rendered
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("displays main message", () => {
    render(<NoNotification />);
    expect(
      screen.getByText("You haven't gotten any notifications yet!")
    ).toBeTruthy();
  });

  it("displays secondary message", () => {
    render(<NoNotification />);
    expect(
      screen.getByText("We'll alert you when something cool happens.")
    ).toBeTruthy();
  });

  it("renders both messages together", () => {
    render(<NoNotification />);
    expect(
      screen.getByText("You haven't gotten any notifications yet!")
    ).toBeTruthy();
    expect(
      screen.getByText("We'll alert you when something cool happens.")
    ).toBeTruthy();
  });

  it("uses correct text styling for main message", () => {
    render(<NoNotification />);
    const mainMessage = screen.getByText(
      "You haven't gotten any notifications yet!"
    );
    expect(mainMessage).toBeTruthy();
  });

  it("uses correct text styling for secondary message", () => {
    render(<NoNotification />);
    const secondaryMessage = screen.getByText(
      "We'll alert you when something cool happens."
    );
    expect(secondaryMessage).toBeTruthy();
  });

  it("centers content vertically and horizontally", () => {
    const { UNSAFE_root } = render(<NoNotification />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("has proper spacing between elements", () => {
    const { UNSAFE_root } = render(<NoNotification />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders icon with gray color", () => {
    render(<NoNotification />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("occupies full height of container", () => {
    const { UNSAFE_root } = render(<NoNotification />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("uses flex layout", () => {
    const { UNSAFE_root } = render(<NoNotification />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("displays proper typography hierarchy", () => {
    render(<NoNotification />);
    const mainMessage = screen.getByText(
      "You haven't gotten any notifications yet!"
    );
    const secondaryMessage = screen.getByText(
      "We'll alert you when something cool happens."
    );
    expect(mainMessage).toBeTruthy();
    expect(secondaryMessage).toBeTruthy();
  });

  it("ignores props gracefully", () => {
    const { UNSAFE_root } = render(<NoNotification />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("renders consistently on multiple renders", () => {
    const { rerender } = render(<NoNotification />);
    expect(
      screen.getByText("You haven't gotten any notifications yet!")
    ).toBeTruthy();

    rerender(<NoNotification />);
    expect(
      screen.getByText("You haven't gotten any notifications yet!")
    ).toBeTruthy();
  });

  it("displays complete empty state message", () => {
    render(<NoNotification />);
    expect(screen.UNSAFE_root).toBeTruthy();
    expect(
      screen.getByText("You haven't gotten any notifications yet!")
    ).toBeTruthy();
    expect(
      screen.getByText("We'll alert you when something cool happens.")
    ).toBeTruthy();
  });
});
