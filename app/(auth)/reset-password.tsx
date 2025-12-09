import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import AppText from "@/components/ui/AppText";
import HeaderComponent from "@/components/ui/HeaderComponent";
import PopupModal from "@/components/ui/PopupModal";
import { PASSWORD_REGEX } from "@/utils/regex";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ResetFormData {
  password: string;
  confirmPassword: string;
}

export default function ResetPasswordScreen() {
  const [visible, setVisible] = useState(false);
  const { control, handleSubmit, watch } = useForm<ResetFormData>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ResetFormData) => {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    setVisible(true);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <PopupModal
        visible={visible}
        showCloseButton={false}
        onClose={() => setVisible(false)}
        title="Password Changed!"
        description="Your can now use your new password to login to your account."
        primaryAction={{
          label: "Login",
          onPress: () => {},
        }}
      />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="p-5">
          <HeaderComponent />
          <AppText className="font-outfit-semibold text-3xl">
            Reset Password
          </AppText>
          <AppText variant="body" className="text-secondary mt-1">
            Set the new password for your account so you can login and access
            all the features.
          </AppText>
        </View>

        {/* Form */}
        <View className="gap-5 px-5 py-6">
          {/* Email Input */}

          {/* Password Input */}
          <AppInput<ResetFormData>
            control={control}
            name="password"
            label="Password"
            placeholder="Enter your password"
            password
            rules={{
              required: "Password is required",
              pattern: {
                value: PASSWORD_REGEX,
                message:
                  "Password must be at least 8 characters, include uppercase, lowercase, number, and special character",
              },
            }}
          />

          <AppInput<ResetFormData>
            control={control}
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your password"
            password
            rules={{
              required: "Password is required",
              pattern: {
                value: PASSWORD_REGEX,
                message:
                  "Password must be at least 8 characters, include uppercase, lowercase, number, and special character",
              },
              validate: (value: string) =>
                value === watch("password") || "Passwords do not match",
            }}
          />

          {/* Login Button */}
          <View className="mt-32">
            <AppButton label="Continue" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
