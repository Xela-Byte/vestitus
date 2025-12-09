import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import AppText from "@/components/ui/AppText";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const { control, handleSubmit, watch } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: LoginFormData) => {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="p-5">
          <AppText variant="h2">Login to your account</AppText>
          <AppText variant="body" className="text-secondary mt-3">
            It's great to see you again!
          </AppText>
        </View>

        {/* Form */}
        <View className="gap-5 px-5 py-6">
          {/* Email Input */}
          <AppInput
            control={control}
            name="email"
            label="Email Address"
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            }}
          />

          {/* Password Input */}
          <AppInput
            control={control}
            name="password"
            label="Password"
            placeholder="Enter your password"
            secureTextEntry={true}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
          />

          {/* Login Button */}
          <View className="mt-4">
            <AppButton label="Login" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
