import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { View } from "react-native";
import AppText from "./AppText";

interface SliderProps {
  min: number;
  max: number;
  minValue?: number;
  maxValue?: number;
  value?: number;
  onChange?: (value: number) => void;
  onMinChange?: (value: number) => void;
  onMaxChange?: (value: number) => void;
  step?: number;
  label?: string;
  showValue?: boolean;
  showValues?: boolean;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const RangeSlider = ({
  min,
  max,
  minValue,
  maxValue,
  value,
  onChange,
  onMinChange,
  onMaxChange,
  step = 1,
  label,
  showValue = true,
  showValues,
  prefix = "",
  suffix = "",
  className = "",
}: SliderProps) => {
  // Determine if this is a range slider or single slider
  const isRangeSlider =
    minValue !== undefined &&
    maxValue !== undefined &&
    (onMinChange || onMaxChange);

  const [localMinValue, setLocalMinValue] = useState(minValue || min);
  const [localMaxValue, setLocalMaxValue] = useState(maxValue || max);
  const [localValue, setLocalValue] = useState(value || 0);

  // Determine show values flag
  const shouldShowValues = showValues !== undefined ? showValues : showValue;

  if (isRangeSlider) {
    // Range Slider Mode
    const handleMinChange = (newValue: number) => {
      const constrainedValue = Math.min(newValue, localMaxValue);
      setLocalMinValue(constrainedValue);
      onMinChange?.(constrainedValue);
    };

    const handleMaxChange = (newValue: number) => {
      const constrainedValue = Math.max(newValue, localMinValue);
      setLocalMaxValue(constrainedValue);
      onMaxChange?.(constrainedValue);
    };

    return (
      <View className={`${className}`}>
        {label && (
          <AppText className="text-sm font-outfit-semibold mb-2">
            {label}
          </AppText>
        )}

        {shouldShowValues && (
          <View className="mb-4 px-2 flex flex-row items-center justify-between">
            <AppText className="text-sm font-outfit-medium text-primary">
              {prefix}
              {localMinValue.toLocaleString()}
              {suffix}
            </AppText>

            <AppText className="text-sm font-outfit-medium text-primary">
              {prefix}
              {localMaxValue.toLocaleString()}
              {suffix}
            </AppText>
          </View>
        )}

        {/* Min Slider */}
        <View className="mb-3">
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={min}
            maximumValue={max}
            value={localMinValue}
            onValueChange={handleMinChange}
            step={step}
            minimumTrackTintColor="#1A1A1A"
            maximumTrackTintColor="#E5E5E5"
            thumbTintColor="#1A1A1A"
          />
        </View>

        {/* Max Slider */}
        <View>
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={min}
            maximumValue={max}
            value={localMaxValue}
            onValueChange={handleMaxChange}
            step={step}
            minimumTrackTintColor="#1A1A1A"
            maximumTrackTintColor="#E5E5E5"
            thumbTintColor="#1A1A1A"
          />
        </View>
      </View>
    );
  }

  // Single Slider Mode
  const handleChange = (newValue: number) => {
    setLocalValue(newValue);
    onChange?.(newValue);
  };

  return (
    <View className={`${className}`}>
      {label && (
        <AppText className="text-sm font-outfit-semibold mb-2">{label}</AppText>
      )}

      {shouldShowValues && (
        <View className="mb-4 px-2 flex flex-row items-center justify-between">
          <AppText className="text-sm font-outfit-medium text-primary">
            {prefix}
            {localValue.toLocaleString()}
            {suffix}
          </AppText>

          <AppText className="text-sm font-outfit-medium text-primary">
            {prefix}
            {max.toLocaleString()}
            {suffix}
          </AppText>
        </View>
      )}

      {/* Slider */}
      <View>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={min}
          maximumValue={max}
          value={localValue}
          onValueChange={handleChange}
          step={step}
          minimumTrackTintColor="#1A1A1A"
          maximumTrackTintColor="#E5E5E5"
          thumbTintColor="#1A1A1A"
        />
      </View>
    </View>
  );
};

export default RangeSlider;
