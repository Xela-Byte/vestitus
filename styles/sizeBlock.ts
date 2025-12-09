import { moderateScale, scale, verticalScale } from "react-native-size-matters";

/**
 * Get font size using moderate scale
 */
const fontSize = (value: number): number => {
  return moderateScale(value);
};

/**
 * Get width size using scale
 */
const getWidthSize = (value: number): number => {
  return scale(value);
};

/**
 * Get height size using vertical scale
 */
const getHeightSize = (value: number): number => {
  return verticalScale(value);
};

// Export functional API
export const sizes = {
  fontSize,
  getWidthSize,
  getHeightSize,
};
