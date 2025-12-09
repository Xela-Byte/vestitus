// @ts-nocheck
import nativewind from "nativewind/preset";
import { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [nativewind],
  theme: {
    extend: {
      fontFamily: {
        "outfit-thin": ["Outfit-Thin"],
        "outfit-extralight": ["Outfit-ExtraLight"],
        "outfit-light": ["Outfit-Light"],
        "outfit-regular": ["Outfit-Regular"],
        "outfit-medium": ["Outfit-Medium"],
        "outfit-semibold": ["Outfit-SemiBold"],
        "outfit-bold": ["Outfit-Bold"],
        "outfit-extrabold": ["Outfit-ExtraBold"],
        "outfit-black": ["Outfit-Black"],
        "sf-light": ["SF-Pro-Display-Light"],
        "sf-regular": ["SF-Pro-Display-Regular"],
        "sf-medium": ["SF-Pro-Display-Medium"],
        "sf-semibold": ["SF-Pro-Display-SemiBold"],
        "sf-bold": ["SF-Pro-Display-Bold"],
        "sf-heavy": ["SF-Pro-Display-Heavy"],
        "sf-black": ["SF-Pro-Display-Black"],
      },
      colors: {
        primary: "#1A1A1A",
        secondary: "#808080",
        stroke: "#E0E0E0",
        green: "#0C9409",
        inactive: "#CCCCCC",
        grey: "#B3B3B3",
        input: "#E6E6E6",
      },
    },
  },
  plugins: [],
};

export default config;
