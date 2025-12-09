import { sizeBlock } from "@/styles/universalStyle";
import ExclamationCircle from "@expo/vector-icons/AntDesign";
import EyeIcon from "@expo/vector-icons/Entypo";
import CheckCircle from "@expo/vector-icons/FontAwesome5";
import React, { useState } from "react";
import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { KeyboardType, TextInput, TextInputProps, View } from "react-native";
import AppText from "./AppText";

type AppInputProps<TFieldValues extends FieldValues> = {
  control: any;
  name: FieldPath<TFieldValues>;
  password?: boolean;
  rules?: object;
  placeholder?: string;
  label?: string;
  iconName?: string;
  onFocus?: () => void;
  keyboardType?: KeyboardType;
  editable?: boolean;
  defaultValue?: TFieldValues[FieldPath<TFieldValues>];
  inputProps?: TextInputProps;
  mutliline?: boolean;
  extraComponent?: any;
  enableExtraComponent?: boolean;
  inputRef?: React.RefObject<TextInput | null>;
  className?: string;
};

const AppInput = <TFieldValues extends FieldValues>({
  control,
  name,
  password,
  rules,
  placeholder,
  keyboardType,
  onFocus,
  editable,
  defaultValue,
  inputRef,
  inputProps,
  mutliline,
  label,
  extraComponent,
  enableExtraComponent,
  className = "",
}: AppInputProps<TFieldValues>) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState<
    boolean | string | undefined
  >(password);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          columnGap: sizeBlock.getWidthSize(5),
          display: "flex",
          marginBottom: sizeBlock.getHeightSize(5),
        }}
      >
        {label && (
          <AppText className="mb-1" weight="medium">
            {label}
          </AppText>
        )}
      </View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          return (
            <View>
              <View
                className={`${className} w-full rounded-xl px-4 border flex flex-row items-center relative
              bg-white
              ${error ? "border-red-500" : value && value.length > 0 && !error ? "border-green" : isFocused ? "border-gray-400" : "border-stroke"}
              ${mutliline ? "h-40" : "h-14"}
              `}
              >
                <TextInput
                  ref={inputRef}
                  value={value}
                  onChangeText={onChange}
                  onBlur={() => {
                    setIsFocused(false);
                  }}
                  defaultValue={defaultValue}
                  editable={editable}
                  secureTextEntry={showPassword ? true : false}
                  placeholderTextColor={isFocused ? "transparent" : "#e6e6e6"}
                  placeholder={placeholder}
                  keyboardType={keyboardType}
                  cursorColor="#e6e6e6"
                  autoCorrect={false}
                  className={`${name && name.toLowerCase().includes("email") ? "lowercase" : "normal-case"} font-outfit-regular ${enableExtraComponent ? "w-[80%]" : "w-[90%]"} h-full text-[#060109] pr-[${enableExtraComponent ? "4" : "0"}]`}
                  onFocus={() => {
                    onFocus && onFocus();
                    setIsFocused(true);
                  }}
                  multiline={mutliline}
                  numberOfLines={5}
                  onEndEditing={() => {
                    name === "email"
                      ? onChange(value?.toLowerCase().trim())
                      : onChange(value?.trim());
                  }}
                  {...inputProps}
                />
                {value && value.length > 0 && !error && !password && (
                  <>
                    <CheckCircle
                      name="check-circle"
                      className="ml-auto text-green"
                      color={"#0C9409"}
                      size={sizeBlock.getWidthSize(16)}
                    />
                  </>
                )}
                {value && value.length > 0 && error && !password && (
                  <>
                    <ExclamationCircle
                      name="exclamation-circle"
                      className="ml-auto"
                      color={"red"}
                      size={sizeBlock.getWidthSize(16)}
                    />
                  </>
                )}
                {password && (
                  <>
                    <EyeIcon
                      onPress={() => setShowPassword(!showPassword)}
                      name={showPassword ? "eye-with-line" : "eye"}
                      className="ml-auto"
                      color={"#666666"}
                      size={sizeBlock.getWidthSize(16)}
                    />
                  </>
                )}
                {extraComponent && extraComponent}
              </View>
              {error && (
                <AppText className="text-xs my-2 text-red-500">
                  {error.message || "Error"}
                </AppText>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default AppInput;
