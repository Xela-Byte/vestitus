import { sizeBlock } from "@/styles/universalStyle";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Platform, TextInput, TextInputProps, View } from "react-native";
import SpeechToText from "../speech/SpeechToText";

interface SearchInputProps extends TextInputProps {
  className?: string;
  onSearchChange?: (text: string) => void;
  searchIconColor?: string;
  micIconColor?: string;
  searchIconSize?: number;
  micIconSize?: number;
  placeholderTextColor?: string;
  isFocused?: boolean;
  containerClassName?: string;
  borderColor?: string;
  focusedBorderColor?: string;
}

const SearchInput = React.forwardRef<TextInput, SearchInputProps>(
  (
    {
      className = "",
      onSearchChange,
      searchIconColor = "#B3B3B3",
      micIconColor = "#B3B3B3",
      searchIconSize = 20,
      micIconSize = 20,
      placeholderTextColor = "#b3b3b3",
      placeholder = "Search...",
      containerClassName = "",
      borderColor = "border-stroke",
      focusedBorderColor = "border-gray-300",
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState("");

    const handleSpeechResult = (transcript: string) => {
      setInternalValue(transcript);
      if (onSearchChange) {
        onSearchChange(transcript);
      }
    };

    const handleTextChange = (text: string) => {
      setInternalValue(text);
      if (onSearchChange) {
        onSearchChange(text);
      }
    };

    return (
      <View
        className={`${containerClassName} w-full rounded-xl px-4 border flex flex-row items-center bg-input ${
          isFocused ? focusedBorderColor : borderColor
        } h-14`}
        style={{
          paddingHorizontal: sizeBlock.getWidthSize(4),
        }}
      >
        {/* Search Icon */}
        {internalValue?.length === 0 ? (
          <Feather
            name="search"
            size={searchIconSize}
            color={searchIconColor}
            style={{
              marginRight: sizeBlock.getWidthSize(3),
            }}
          />
        ) : (
          <Feather
            name="x"
            size={searchIconSize}
            color={searchIconColor}
            style={{
              marginRight: sizeBlock.getWidthSize(3),
            }}
            onPress={() => handleTextChange("")}
          />
        )}

        {/* Text Input */}
        <TextInput
          ref={ref}
          {...props}
          value={String(internalValue)}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={handleTextChange}
          cursorColor="#1a1a1a"
          autoCorrect={false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            marginBottom: Platform.select({
              ios:
                internalValue.length > 0
                  ? sizeBlock.getHeightSize(5)
                  : sizeBlock.getHeightSize(2),
              android: 0,
            }),
          }}
          className={`${className} font-outfit-regular flex-1 h-full px-2  text-base text-primary`}
        />

        <SpeechToText
          micIconColor={micIconColor}
          micIconSize={micIconSize}
          onSpeechResult={handleSpeechResult}
        />
      </View>
    );
  }
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
