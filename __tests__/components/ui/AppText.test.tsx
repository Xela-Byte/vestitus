import React from "react";
import AppText from "../../../components/ui/AppText";
import { render, screen } from "../../setup/test-utils";

describe("AppText Component", () => {
  it("renders text content correctly", () => {
    render(<AppText>Hello World</AppText>);
    const element = screen.getByText("Hello World");
    expect(element).toBeDefined();
  });

  it("renders with variant preset", () => {
    const { getByText } = render(<AppText variant="h1">Heading 1</AppText>);
    expect(getByText("Heading 1")).toBeDefined();
  });

  it("renders with className", () => {
    const { getByText } = render(
      <AppText className="text-lg font-bold">Styled Text</AppText>
    );
    expect(getByText("Styled Text")).toBeDefined();
  });

  it("renders with weight prop", () => {
    const { getByText } = render(<AppText weight="bold">Bold Text</AppText>);
    expect(getByText("Bold Text")).toBeDefined();
  });

  it("renders with style prop", () => {
    const { getByText } = render(
      <AppText style={{ fontSize: 18 }}>Styled Text</AppText>
    );
    expect(getByText("Styled Text")).toBeDefined();
  });

  it("renders children correctly", () => {
    const { getByText } = render(
      <AppText>
        <AppText>Nested Text</AppText>
      </AppText>
    );
    expect(getByText("Nested Text")).toBeDefined();
  });

  it("applies numberOfLines prop", () => {
    const { getByText } = render(
      <AppText numberOfLines={1}>Long text that should be truncated</AppText>
    );
    expect(getByText("Long text that should be truncated")).toBeDefined();
  });
});
