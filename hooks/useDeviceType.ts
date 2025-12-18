import { useEffect, useState } from "react";
import { Dimensions, ScaledSize } from "react-native";

export type DeviceType = "phone" | "tablet" | "large-tablet";

/**
 * Hook to detect device type based on screen width
 * - phone: width < 600px
 * - tablet: 600px <= width < 1024px
 * - large-tablet: width >= 1024px
 * @returns DeviceType - The current device type
 */
export const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>("phone");

  useEffect(() => {
    const handleDimensionChange = ({ window }: { window: ScaledSize }) => {
      const width = window.width;
      let newDeviceType: DeviceType;

      if (width >= 1024) {
        newDeviceType = "large-tablet";
      } else if (width >= 600) {
        newDeviceType = "tablet";
      } else {
        newDeviceType = "phone";
      }

      setDeviceType(newDeviceType);
    };

    // Set initial device type
    const { width } = Dimensions.get("window");
    if (width >= 1024) {
      setDeviceType("large-tablet");
    } else if (width >= 600) {
      setDeviceType("tablet");
    } else {
      setDeviceType("phone");
    }

    // Listen for dimension changes
    const subscription = Dimensions.addEventListener(
      "change",
      handleDimensionChange
    );

    return () => {
      subscription?.remove();
    };
  }, []);

  return deviceType;
};
