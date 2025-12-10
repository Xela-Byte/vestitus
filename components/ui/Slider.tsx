import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { View } from "react-native";
import AppText from "./AppText";

interface RangeSliderProps {
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  step?: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
  label?: string;
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
  step = 1,
  onMinChange,
  onMaxChange,
  label,
  showValues = true,
  prefix = "",
  suffix = "",
  className = "",
}: RangeSliderProps) => {
  const [localMinValue, setLocalMinValue] = useState(minValue);
  const [localMaxValue, setLocalMaxValue] = useState(maxValue);

  const handleMinChange = (value: number) => {
    if (value <= localMaxValue) {
      setLocalMinValue(value);
      onMinChange(value);
    }
  };

  const handleMaxChange = (value: number) => {
    if (value >= localMinValue) {
      setLocalMaxValue(value);
      onMaxChange(value);
    }
  };

  return (
    <View className={`${className}`}>
      {label && (
        <AppText className="text-sm font-outfit-semibold mb-2">{label}</AppText>
      )}

      {showValues && (
        <View className="flex-row justify-between mb-4 px-2">
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
      <View className="mb-6">
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
          minimumTrackTintColor="#E5E5E5"
          maximumTrackTintColor="#E5E5E5"
          thumbTintColor="#1A1A1A"
        />
      </View>
    </View>
  );
};

export default RangeSlider;
