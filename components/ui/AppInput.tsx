import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  Controller,
  FieldValues,
  Path,
  UseControllerProps,
} from "react-hook-form";
import { Platform, TextInput, TextInputProps, View } from "react-native";
import AppText from "./AppText";

export interface AppInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> extends Omit<TextInputProps, "defaultValue"> {
  /**
   * NativeWind className string for styling the input container
   * @example "border-2 border-gray-300 rounded-lg"
   */
  className?: string;

  /**
   * NativeWind className for the input element itself
   * @example "text-base font-medium"
   */
  inputClassName?: string;

  /**
   * Label text to display above the input
   */
  label?: string;

  /**
   * NativeWind className for the label
   * @example "text-sm font-semibold text-gray-700"
   */
  labelClassName?: string;

  /**
   * Error message to display below the input
   */
  error?: string;

  /**
   * NativeWind className for the error text
   * @example "text-xs text-red-600"
   */
  errorClassName?: string;

  /**
   * Indicates whether the field is valid/successful
   */
  isValid?: boolean;

  /**
   * React Hook Form control object
   */
  control?: UseControllerProps<TFieldValues, TName>["control"];

  /**
   * React Hook Form field name
   */
  name?: TName;

  /**
   * React Hook Form field rules
   */
  rules?: UseControllerProps<TFieldValues, TName>["rules"];

  /**
   * NativeWind className for the icon container
   */
  iconContainerClassName?: string;

  /**
   * Size of the validation icons
   * @default 20
   */
  iconSize?: number;

  /**
   * Color for error icon
   * @default "#ef4444"
   */
  errorIconColor?: string;

  /**
   * Color for success icon
   * @default "#22c55e"
   */
  successIconColor?: string;

  /**
   * Container className for wrapper
   */
  containerClassName?: string;

  /**
   * If true, shows eye icon to toggle password visibility instead of secureTextEntry
   */
  securedEntry?: boolean;
}

/**
 * Reusable Input component with React Hook Form integration
 *
 * Features:
 * - Full React Hook Form support with Controller wrapper
 * - NativeWind styling for all elements
 * - Dynamic validation icons (error or success)
 * - Optional label and error message display
 * - Accessibility support
 * - Platform-specific adjustments
 *
 * @example
 * // Basic usage with React Hook Form
 * const { control } = useForm();
 * <AppInput
 *   control={control}
 *   name="email"
 *   label="Email"
 *   placeholder="Enter your email"
 *   rules={{ required: "Email is required" }}
 * />
 *
 * @example
 * // With custom styling
 * <AppInput
 *   control={control}
 *   name="password"
 *   label="Password"
 *   placeholder="Enter password"
 *   secureTextEntry
 *   className="border-2 border-blue-500 rounded-lg px-4 py-3"
 *   labelClassName="text-base font-bold text-blue-900"
 *   errorClassName="text-sm text-red-600 mt-1"
 * />
 *
 * @example
 * // Without React Hook Form (uncontrolled)
 * <AppInput
 *   placeholder="Uncontrolled input"
 *   className="border border-gray-300 rounded-md px-3 py-2"
 * />
 */
function AppInputComponent<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>(
  {
    className = "border border-stroke rounded-xl px-4 py-4 flex-row items-center justify-between bg-white",
    inputClassName = "flex-1 text-base text-gray-900",
    label,
    labelClassName = "text-sm font-semibold text-gray-700 mb-2",
    error,
    errorClassName = "text-xs text-red-600 mt-1",
    isValid = false,
    control,
    name,
    rules,
    iconContainerClassName = "mr-3",
    iconSize = 20,
    errorIconColor = "#ef4444",
    successIconColor = "#22c55e",
    containerClassName = "",
    securedEntry = false,
    ...textInputProps
  }: AppInputProps<TFieldValues, TName>,
  ref: React.Ref<TextInput>
) {
  const [showPassword, setShowPassword] = React.useState(false);

  const renderIcon = () => {
    // Show eye icon for password visibility toggle if securedEntry is true
    if (securedEntry || textInputProps.secureTextEntry) {
      return (
        <View className={iconContainerClassName}>
          <MaterialIcons
            name={showPassword ? "visibility" : "visibility-off"}
            size={iconSize}
            color="#6b7280"
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>
      );
    }

    if (error) {
      return (
        <View className={iconContainerClassName}>
          <MaterialIcons name="error" size={iconSize} color={errorIconColor} />
        </View>
      );
    }

    if (isValid) {
      return (
        <View className={iconContainerClassName}>
          <MaterialIcons
            name="check-circle"
            size={iconSize}
            color={successIconColor}
          />
        </View>
      );
    }

    return null;
  };

  const inputContent = (
    <View className={containerClassName}>
      {label && <View className={labelClassName}>{label}</View>}
      <View
        className={`${className} ${
          error ? "border-red-500" : isValid ? "border-green-500" : ""
        }`}
        style={{
          borderWidth: Platform.OS === "web" ? 1 : undefined,
        }}
      >
        <TextInput
          ref={ref}
          className={inputClassName}
          placeholderTextColor="#9ca3af"
          editable={!textInputProps.editable === false}
          secureTextEntry={
            securedEntry ? !showPassword : textInputProps.secureTextEntry
          }
          {...textInputProps}
        />
        {renderIcon()}
      </View>
      {error && <View className={errorClassName}>{error}</View>}
    </View>
  );

  // If control and name are provided, wrap with Controller
  if (control && name) {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field, fieldState }: any) => (
          <View className={containerClassName}>
            {label && (
              <View className={labelClassName}>
                <AppText>{label}</AppText>
              </View>
            )}
            <View
              className={`${className} ${
                fieldState.error
                  ? "border-red-500"
                  : fieldState.invalid === false && field.value
                    ? "border-green-500"
                    : ""
              }`}
            >
              <TextInput
                ref={ref}
                className={inputClassName}
                placeholderTextColor="#9ca3af"
                value={field.value || ""}
                onChangeText={field.onChange}
                onBlur={field.onBlur}
                secureTextEntry={
                  securedEntry ? !showPassword : textInputProps.secureTextEntry
                }
                {...textInputProps}
              />
              {securedEntry ? (
                <View className={iconContainerClassName}>
                  <MaterialIcons
                    name={showPassword ? "visibility" : "visibility-off"}
                    size={iconSize}
                    color="#6b7280"
                    onPress={() => setShowPassword(!showPassword)}
                  />
                </View>
              ) : fieldState.error ? (
                <View className={iconContainerClassName}>
                  <MaterialIcons
                    name="error"
                    size={iconSize}
                    color={errorIconColor}
                  />
                </View>
              ) : fieldState.invalid === false && field.value ? (
                <View className={iconContainerClassName}>
                  <MaterialIcons
                    name="check-circle"
                    size={iconSize}
                    color={successIconColor}
                  />
                </View>
              ) : null}
            </View>
            {fieldState.error && (
              <View className={errorClassName}>{fieldState.error.message}</View>
            )}
          </View>
        )}
      />
    );
  }

  // Return uncontrolled component if no control provided
  return inputContent;
}

export const AppInput = React.forwardRef(AppInputComponent) as <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>(
  props: AppInputProps<TFieldValues, TName> & {
    ref?: React.Ref<TextInput>;
  }
) => React.ReactElement;

export default AppInput;
