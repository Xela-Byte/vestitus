import React from "react";
import { Text, TextProps, TextStyle } from "react-native";

interface AppTextProps extends TextProps {
  /**
   * NativeWind className string for styling
   * @example "text-lg font-bold text-gray-800"
   */
  className?: string;

  /**
   * Additional native styles to merge with NativeWind styles
   */
  style?: TextProps["style"];

  /**
   * Variant preset for common text styles
   */
  variant?: "h1" | "h2" | "h3" | "body" | "caption" | "button";
  weight?:
    | "thin"
    | "extralight"
    | "light"
    | "regular"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
}

/**
 * Reusable Text component with support for both NativeWind and native styles
 *
 * @example
 * // Using NativeWind classes
 * <AppText className="text-lg font-bold text-blue-600">Hello</AppText>
 *
 * @example
 * // Using native styles
 * <AppText style={{ fontSize: 16, fontWeight: 'bold' }}>Hello</AppText>
 *
 * @example
 * // Using variant presets
 * <AppText variant="h1">Heading</AppText>
 *
 * @example
 * // Combining className and style
 * <AppText className="text-blue-600" style={{ fontWeight: 'bold' }}>Mixed</AppText>
 */
const AppText = React.forwardRef<Text, AppTextProps>(
  (
    {
      className,
      style,
      variant,
      weight,
      children,
      numberOfLines,
      ...restProps
    },
    ref
  ) => {
    // Weight to fontWeight mapping
    const weightMap: Record<string, TextStyle["fontWeight"]> = {
      thin: "100",
      extralight: "200",
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    };

    // Define variant presets
    const variantStyles: Record<string, TextStyle> = {
      h1: {
        fontSize: 64,
        fontWeight: "800",
        lineHeight: 64,
        fontFamily: "Outfit-Bold",
      },
      h2: {
        fontSize: 32,
        fontWeight: "700",
        lineHeight: 32,
        fontFamily: "Outfit-Bold",
      },
      h3: {
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 28,
        fontFamily: "Outfit-SemiBold",
      },
      body: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 24,
        fontFamily: "Outfit-Regular",
      },
      caption: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 18,
        fontFamily: "Outfit-Regular",
      },
      button: {
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 24,
        fontFamily: "Outfit-SemiBold",
      },
    };

    // Merge variant styles with provided styles and weight
    const computedStyle = [
      variant && variantStyles[variant],
      weight && { fontWeight: weightMap[weight] },
      style,
    ].filter(Boolean);

    return (
      <Text
        ref={ref}
        className={className}
        style={computedStyle}
        numberOfLines={numberOfLines}
        {...restProps}
      >
        {children}
      </Text>
    );
  }
);

AppText.displayName = "AppText";

export default AppText;
