import SomeGuy from "@/assets/images/man.png";
import WhiteLines from "@/assets/images/white_lines.png";
import AppButton from "@/components/ui/AppButton";
import AppText from "@/components/ui/AppText";
import { sizeBlock } from "@/styles/universalStyle";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  return (
    <SafeAreaView>
      <View className="relative">
        <View className="p-5">
          <AppText variant="h1" weight="semibold">
            Define yourself in your unique way.
          </AppText>
        </View>
        <Image
          source={SomeGuy}
          // @ts-ignore
          style={{
            width: "110%",
            height: sizeBlock.getHeightSize(500),
            marginTop: -sizeBlock.getHeightSize(70),
            marginLeft: sizeBlock.getWidthSize(0),
            filter: Platform.select({
              ios: "none",
              android: "grayscale(1) brightness(0.7)",
            }),
          }}
        />
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
        <View className="absolute bottom-20 w-full p-10">
          <Link href={"/register"} asChild>
            <AppButton label="Get Started" className="shadow-sm shadow-white" />
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
