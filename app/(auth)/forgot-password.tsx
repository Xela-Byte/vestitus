import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import AppText from "@/components/ui/AppText";
import HeaderComponent from "@/components/ui/HeaderComponent";
import { useDeviceType } from "@/hooks";
import { sizeBlock } from "@/styles/universalStyle";
import { EMAIL_REGEX } from "@/utils/regex";
import { useRouter } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm<ForgotPasswordFormData>({
    defaultValues: {
      email: "",
    },
  });
  const isTablet = useDeviceType() === "tablet";

  const router = useRouter();

  const onSubmit = async (data: ForgotPasswordFormData) => {
    router.push({
      pathname: "/verify-code",
      params: { email: data.email },
    });
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View
        style={{
          padding: isTablet
            ? sizeBlock.getWidthSize(15)
            : sizeBlock.getWidthSize(20),
        }}
      >
        <HeaderComponent />
        <AppText variant="h2" className="font-outfit-semibold text-3xl">
          Forgot password
        </AppText>
        <AppText variant="body" className="text-secondary mt-1">
          Enter your email for the verification process. We will send 4 digits
          code to your email.
        </AppText>
      </View>

      {/* Form */}
      <View
        style={{
          padding: isTablet
            ? sizeBlock.getWidthSize(15)
            : sizeBlock.getWidthSize(20),
        }}
        className="gap-5"
      >
        {/* Email Input */}
        <AppInput<ForgotPasswordFormData>
          control={control}
          name="email"
          label="Email Address"
          placeholder="Enter your email"
          keyboardType="email-address"
          rules={{
            required: "Email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Please enter a valid email address",
            },
          }}
        />
      </View>

      <View
        style={{
          padding: isTablet
            ? sizeBlock.getWidthSize(15)
            : sizeBlock.getWidthSize(20),
        }}
        className="mt-32"
      >
        {/* Submit Button */}
        <AppButton label="Send Code" onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
