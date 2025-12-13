import AntDesignIcon from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

interface AppDropdownProps {
  label?: string;
  options: string[];
  value: string;
  onSelect: (option: string) => void;
  placeholder?: string;
  className?: string;
  showCheckmark?: boolean;
}

const AppDropdown = ({
  label,
  options,
  value,
  onSelect,
  placeholder = "Select option",
  className = "",
  showCheckmark = true,
}: AppDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className="mb-5">
      {label && (
        <AppText weight="medium" className="mb-1">
          {label}
        </AppText>
      )}

      {/* Dropdown Trigger */}
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        className={`${className} w-full rounded-xl px-4 h-14 border flex flex-row items-center justify-between
          bg-white ${
            value
              ? "border-green"
              : isOpen
                ? "border-gray-400"
                : "border-stroke"
          }`}
      >
        <AppText className={value ? "text-black" : "text-gray-500"}>
          {value || placeholder}
        </AppText>
        <AntDesignIcon
          name={isOpen ? "up" : "down"}
          size={16}
          color="#808080"
        />
      </TouchableOpacity>

      {/* Dropdown Menu */}
      {isOpen && (
        <View className="mt-2 border border-gray-300 rounded-xl bg-white z-50">
          {options.map((option, index) => (
            <TouchableOpacity
              key={option}
              onPress={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              className={`px-4 py-3 flex-row items-center justify-between ${
                index !== options.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <AppText
                className={
                  option === value ? "text-primary font-medium" : "text-black"
                }
              >
                {option}
              </AppText>
              {showCheckmark && option === value && (
                <AntDesignIcon name="check" size={16} color="#1A1A1A" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default AppDropdown;
