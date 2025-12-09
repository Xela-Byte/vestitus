import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
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
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <TouchableOpacity
        className={`${`bg-primary p-5 rounded-xl ${
          fullWidth ? "w-full" : ""
        } ${isDisabled ? "bg-disabled" : ""}`} ${className || ""}`}
        disabled={isDisabled}
        {...props}
        activeOpacity={0.7}
      >
        <View className="flex-row items-center justify-center gap-2">
          {loading && loadingIndicator}
          {!loading && icon && iconPosition === "left" && icon}
          {(label || children) && (
            <AppText className="font-semibold text-white text-center">
              {label || children}
            </AppText>
          )}
          {!loading && icon && iconPosition === "right" && icon}
        </View>
      </TouchableOpacity>
    );
  }
);

AppButton.displayName = "AppButton";

export default AppButton;
