import { render, RenderOptions } from "@testing-library/react-native";
import { ReactElement } from "react";

/**
 * Custom render function that wraps components with necessary providers
 * Can be extended with additional providers (Redux, theme, etc.) as needed
 */
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  return render(ui, { ...options });
};

export * from "@testing-library/react-native";
export { customRender as render };
