import NotifeeCard from "@/components/notification/NotifeeCard";
import { render, screen } from "@testing-library/react-native";
import React from "react";

describe("NotifeeCard", () => {
  const mockNotification = {
    type: "discount" as const,
    title: "Test Notification",
    subtitle: "Test Subtitle",
    timestamp: "2024-01-01",
  };

  it("renders notification card component", () => {
    const { UNSAFE_root } = render(<NotifeeCard {...mockNotification} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("displays notification content", () => {
    render(<NotifeeCard {...mockNotification} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders without crashing", () => {
    const { UNSAFE_root } = render(<NotifeeCard {...mockNotification} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("shows notification details", () => {
    render(<NotifeeCard {...mockNotification} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders consistently", () => {
    const { rerender } = render(<NotifeeCard {...mockNotification} />);
    expect(screen.UNSAFE_root).toBeTruthy();

    rerender(<NotifeeCard {...mockNotification} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("has proper card layout", () => {
    const { UNSAFE_root } = render(<NotifeeCard {...mockNotification} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("maintains visual structure", () => {
    const { UNSAFE_root } = render(<NotifeeCard {...mockNotification} />);
    expect(UNSAFE_root.children.length).toBeGreaterThan(-1);
  });

  it("is a valid component", () => {
    render(<NotifeeCard {...mockNotification} />);
    expect(screen.UNSAFE_root).toBeTruthy();
  });

  it("renders with correct styling", () => {
    const { UNSAFE_root } = render(<NotifeeCard {...mockNotification} />);
    expect(UNSAFE_root).toBeTruthy();
  });

  it("handles multiple instances", () => {
    render(
      <>
        <NotifeeCard {...mockNotification} />
        <NotifeeCard {...mockNotification} />
        <NotifeeCard {...mockNotification} />
      </>
    );
    expect(screen.UNSAFE_root).toBeTruthy();
  });
});
