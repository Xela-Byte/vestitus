import Logo from "@/assets/icons/icon.png";
import GrayLines from "@/assets/images/gray_lines.png";
import "@/styles/global.css";
import { Image } from "expo-image";
import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SplashScreenComponent() {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Skip animation in test environment
    if (process.env.NODE_ENV === "test") {
      return () => {
        if (animationTimeoutRef.current) {
          clearTimeout(animationTimeoutRef.current);
        }
      };
    }

    const runAnimation = () => {
      rotateAnim.setValue(0);

      Animated.sequence([
        // Phase 1: Accelerate (0 to 270 degrees in 600ms)
        Animated.timing(rotateAnim, {
          toValue: 270,
          duration: 600,
          useNativeDriver: true,
        }),
        // Phase 2: Slow down (270 to 360 degrees in 800ms)
        Animated.timing(rotateAnim, {
          toValue: 360,
          duration: 800,
          useNativeDriver: true,
        }),
        // Phase 3: Pick up again (360 to 630 degrees in 600ms)
        Animated.timing(rotateAnim, {
          toValue: 630,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start(() => {
        runAnimation();
      });
    };

    runAnimation();

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const timeoutRef = animationTimeoutRef.current;
      rotateAnim.setValue(0);
      if (timeoutRef) {
        clearTimeout(timeoutRef);
      }
    };
  }, [rotateAnim, animationTimeoutRef]);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <SafeAreaView className="w-screen h-screen bg-primary">
      <View className="size-full flex items-center justify-center relative">
        <Animated.View
          style={{
            transform: [{ rotate: rotation }],
          }}
        >
          <Image source={Logo} style={{ width: 120, height: 120 }} />
        </Animated.View>
        <Image
          source={GrayLines}
          style={{ width: "100%", height: 600, position: "absolute", top: -50 }}
        />
      </View>
    </SafeAreaView>
  );
}
