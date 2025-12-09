import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import AppText from "@/components/ui/AppText";
import HeaderComponent from "@/components/ui/HeaderComponent";
import { useAuthStore } from "@/store";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/utils/regex";
import { Link } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login = useAuthStore((state) => state.login);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: LoginFormData) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      login({ ...data, fullName: "Xela Oladipupo" });
    }, 2000);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="p-5">
          <HeaderComponent />
          <AppText className="font-outfit-semibold text-3xl">
            Login to your account
          </AppText>
          <AppText variant="body" className="text-secondary mt-1">
            It's great to see you again!
          </AppText>
        </View>

        {/* Form */}
        <View className="gap-5 px-5 py-6">
          {/* Email Input */}
          <AppInput<LoginFormData>
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

          {/* Password Input */}
          <AppInput<LoginFormData>
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

          <Link href={"/forgot-password"} asChild>
            <AppText className="text-primary text-sm">
              Forgot your password?{" "}
              <AppText className="text-primary underline text-sm">
                Reset your password
              </AppText>
            </AppText>
          </Link>

          {/* Login Button */}
          <View className="mt-8">
            <AppButton
              label={loading ? "Logging you in..." : "Login"}
              disabled={!isValid}
              loading={loading}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 w-full h-24 p-5">
        <Link href={"/register"} asChild>
          <AppText className="text-primary text-sm text-center">
            Don't have an account?{" "}
            <AppText className="text-primary font-outfit-medium underline text-sm">
              Join us!
            </AppText>
          </AppText>
        </Link>
      </View>
    </SafeAreaView>
  );
}
