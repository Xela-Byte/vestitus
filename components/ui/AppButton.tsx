import React from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import AppText from "./AppText";

export interface AppButtonProps extends TouchableOpacityProps {
  /**
   * Button label text
   */
  label?: string;

  /**
   * Icon component to display (left of text)
   */
  icon?: React.ReactNode;

  /**
   * Position of the icon relative to text
   * @default 'left'
   */
  iconPosition?: "left" | "right";

  /**
   * NativeWind className string
   * @example "bg-primary px-4 py-2 rounded-lg"
   */
  className?: string;

  /**
   * Variant preset for quick styling
   * @default 'primary'
   */
  variant?: "primary" | "secondary" | "outline" | "ghost";

  /**
   * Button size preset
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";

  /**
   * Disable the button
   * @default false
   */
  disabled?: boolean;

  /**
   * Show loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Loading indicator component
   */
  loadingIndicator?: React.ReactNode;

  /**
   * Spacing between icon and text in pixels
   * @default 8
   */
  iconSpacing?: number;

  /**
   * Full width button
   * @default false
   */
  fullWidth?: boolean;
  textClassName?: string;
}

/**
 * Reusable AppButton component with NativeWind styling
 *
 * Uses Tailwind CSS classes for styling through NativeWind.
 * Can be customized with className prop or presets.
 *
 * @example
 * <AppButton
 *   label="Press Me"
 *   className="bg-primary px-4 py-2"
 *   onPress={() => console.log('Pressed')}
 * />
 *
 * @example
 * // With preset variant
 * <AppButton
 *   label="Submit"
 *   variant="primary"
 *   size="lg"
 *   onPress={() => handleSubmit()}
 * />
 *
 * @example
 * // With icon
 * <AppButton
 *   label="Download"
 *   icon={<DownloadIcon />}
 *   iconPosition="left"
 *   variant="primary"
 *   onPress={() => download()}
 * />
 */
const AppButton = React.forwardRef<any, AppButtonProps>(
  (
    {
      label,
      icon,
      iconPosition = "left",
      className,
      variant = "primary",
      size = "md",
      disabled = false,
      loading = false,
      loadingIndicator,
      iconSpacing = 8,
      fullWidth = false,
      children,
      textClassName,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const getVariantStyles = () => {
      if (isDisabled) {
        return "bg-inactive";
      }

      switch (variant) {
        case "primary":
          return "bg-primary";
        case "secondary":
          return "bg-secondary";
        case "outline":
          return "border-2 border-primary";
        case "ghost":
          return "bg-transparent";
        default:
          return "bg-primary";
      }
    };

    const getSizeStyles = () => {
      switch (size) {
        case "sm":
          return "px-3 py-3";
        case "md":
          return "px-4 py-4";
        case "lg":
          return "px-5 py-5";
        default:
          return "px-4 py-4";
      }
    };

    const getTextColor = () => {
      if (variant === "outline" || variant === "ghost") {
        return "text-primary";
      }
      return "text-white";
    };

    return (
      <TouchableOpacity
        className={`${getVariantStyles()} ${getSizeStyles()} rounded-xl ${
          fullWidth ? "w-full" : ""
        } ${className || ""}`}
        disabled={isDisabled}
        {...props}
        activeOpacity={0.7}
      >
        <View className="flex-row items-center justify-center gap-2">
          {loading ? (
            // Show custom loader OR fallback loader
            loadingIndicator ? (
              loadingIndicator
            ) : (
              <ActivityIndicator color="white" />
            )
          ) : (
            // When NOT loading, show left icon (if any)
            icon && iconPosition === "left" && icon
          )}

          {(label || children) && (
            <AppText
              className={`font-semibold text-center ${getTextColor()} ${textClassName || ""}`}
            >
              {label || children}
            </AppText>
          )}

          {/* Right icon (only when not loading) */}
          {!loading && icon && iconPosition === "right" && icon}
        </View>
      </TouchableOpacity>
    );
  }
);

AppButton.displayName = "AppButton";

export default AppButton;
