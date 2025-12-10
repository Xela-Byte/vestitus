import { sizeBlock } from "@/styles/universalStyle";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";
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
      placeholderTextColor = "#e6e6e6",
      placeholder = "Search...",
      containerClassName = "",
      borderColor = "border-stroke",
      focusedBorderColor = "border-gray-300",
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

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
        <Feather
          name="search"
          size={searchIconSize}
          color={searchIconColor}
          style={{
            marginRight: sizeBlock.getWidthSize(3),
          }}
        />

        {/* Text Input */}
        <TextInput
          ref={ref}
          {...props}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onSearchChange}
          cursorColor="#1a1a1a"
          autoCorrect={false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${className} font-outfit-regular flex-1 h-full mb-2 px-2  text-base text-primary`}
        />

        <SpeechToText micIconColor={micIconColor} micIconSize={micIconSize} />
      </View>
    );
  }
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
