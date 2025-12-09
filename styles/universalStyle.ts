import { Dimensions, StyleSheet } from "react-native";
import { sizes } from "./sizeBlock";

// Legacy colors - kept for backward compatibility
export const appColors = {
  primary: "#6A0DAD",
  background: "#FFFFFF",
  white: "#FFFFFF",
  black: "#000000",
  text: "#060109",
  textLight: "#5B575D",
  border: "#6A0DAD",
  gray: "#969498",
  borderLight: "#EBEBEB",
  primary50: "#F0E7F7",
  successLight: "#E7F8F0",
  grey: "#F5F5F5",
  errorLight: "#FEECEB",
  error: "#F04438",
  success: "#12B76A",
};

export const screenWidth = Dimensions.get("screen").width;
export const screenHeight = Dimensions.get("screen").height;

export const sizeBlock = sizes;
export const tabScreenHeight =
  (screenHeight - sizeBlock.getHeightSize(80)) * 0.95;

export const borderRadius = {
  small: 12,
  medium: 20,
  large: 28,
  full: 9999,
};

export const universalStyle = StyleSheet.create({
  centering: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  verticalCentering: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  containerThemed: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  flexBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  spaceEvenly: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  spaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  flexWrap: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
