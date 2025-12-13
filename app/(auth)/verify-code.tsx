import AppButton from "@/components/ui/AppButton";
import AppText from "@/components/ui/AppText";
import HeaderComponent from "@/components/ui/HeaderComponent";
import PinCodeInput from "@/components/ui/PinCodeInput";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const VerifyCodeScreen = () => {
  const { email } = useLocalSearchParams();
  const [code, setCode] = useState("");
  const isValid = useMemo(() => code.length === 4, [code]);
  const router = useRouter();

  const handleResendCode = () => {
    // Logic to resend the code
    console.log("Resend code to:", email);
  };

  const onSubmit = () => {
    if (isValid) {
      // Logic to verify the code
      console.log("Verifying code:", code);
      router.push("/reset-password");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="p-5">
        <HeaderComponent />
        <AppText className="font-outfit-semibold text-3xl">
          Enter 4 Digit Code
        </AppText>
        <AppText variant="body" className="text-secondary mt-1">
          Enter 4 digit code that your receive on your email (
          <AppText className="text-primary">{email}</AppText>).
        </AppText>
      </View>

      {/* Form */}
      <View className="gap-5 px-5 py-6">
        <PinCodeInput
          value={code}
          onChange={setCode}
          maxLength={4}
          maskValue={false}
        />
      </View>

      <Pressable onPress={handleResendCode}>
        <AppText className="text-primary text-sm text-center">
          Email not received?{" "}
          <AppText className="text-primary underline text-sm">
            Resend code
          </AppText>
        </AppText>
      </Pressable>

      <View className="p-5 mt-32">
        {/* Submit Button */}
        <AppButton label="Continue" onPress={onSubmit} disabled={!isValid} />
      </View>
    </SafeAreaView>
  );
};

export default VerifyCodeScreen;
