import SomeGuy from "@/assets/images/man.png";
import WhiteLines from "@/assets/images/white_lines.png";
import AppButton from "@/components/ui/AppButton";
import AppText from "@/components/ui/AppText";
import { useDeviceType } from "@/hooks";
import { screenHeight, screenWidth } from "@/styles/universalStyle";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  const isTablet = useDeviceType() === "tablet";

  return (
    <SafeAreaView>
      <View className="relative h-[100vh] w-full">
        <View className="px-5 py-10 z-20">
          <AppText variant="h1" weight="semibold">
            Define yourself in your unique way.
          </AppText>
        </View>
        <View className="absolute bottom-0 z-10 h-screen w-screen items-center justify-center">
          <Image
            source={SomeGuy}
            // @ts-ignore
            style={{
              width: screenWidth,
              height: screenHeight,
              filter: Platform.select({
                ios: "none",
                android: "grayscale(1) brightness(0.7)",
              }),
              marginTop: isTablet ? screenHeight * 0.35 : screenHeight * 0.3,
            }}
          />
        </View>
        <Image
          source={WhiteLines}
          style={{
            width: "100%",
            height: 700,
            position: "absolute",
            zIndex: -1,
            top: "20%",
          }}
        />
        <View className="absolute bottom-20 w-full p-10 z-20">
          <Link href={"/register"} asChild>
            <AppButton label="Get Started" className="shadow-sm shadow-white" />
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
