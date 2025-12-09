import React, { useRef, useState } from "react";
import { TextInput, View } from "react-native";

interface PinCodeInputProps {
  value?: string;
  onChange?: (value: string) => void;
  maxLength?: number;
  disabled?: boolean;
  style?: any;
  maskValue?: boolean;
}

const PinCodeInput: React.FC<PinCodeInputProps> = ({
  value = "",
  onChange,
  maxLength = 6,
  disabled = false,
  maskValue = true,
}) => {
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [visibleDigits, setVisibleDigits] = useState<{
    [key: number]: boolean;
  }>({});

  const handleChange = (text: string, index: number) => {
    const newValue = text.replace(/[^0-9]/g, "");
    const currentCode = value.split("");

    if (newValue) {
      currentCode[index] = newValue;

      // Show digit briefly
      setVisibleDigits((prev) => ({ ...prev, [index]: true }));

      // Hide digit after 500ms
      setTimeout(() => {
        setVisibleDigits((prev) => ({ ...prev, [index]: false }));
      }, 500);

      if (index < maxLength - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      currentCode[index] = "";
      setVisibleDigits((prev) => ({ ...prev, [index]: false }));
    }

    onChange?.(currentCode.join(""));
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(null);
  };

  const getDisplayValue = (index: number) => {
    const digit = value[index];
    if (!digit) return "";
    return visibleDigits[index] ? digit : "*";
  };

  return (
    <View className="flex flex-row items-center justify-center gap-10">
      {Array.from({ length: maxLength }, (_, index) => (
        <TextInput
          key={index}
          ref={(ref) => {
            inputRefs.current[index] = ref;
          }}
          value={maskValue ? getDisplayValue(index) : value[index]}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          onFocus={() => handleFocus(index)}
          onBlur={handleBlur}
          maxLength={1}
          editable={!disabled}
          keyboardType="numeric"
          cursorColor="white"
          className={`
            w-16 h-16 border text-primary rounded-lg text-center text-3xl font-outfit-semibold font-medium
            ${focusedIndex === index ? "border-primary" : "border-stroke"}
            ${value[index] ? "border-primary" : ""}
            ${disabled ? "bg-gray-200 opacity-50" : "bg-white"}
            `}
          textAlign="center"
        />
      ))}
    </View>
  );
};

export default PinCodeInput;
