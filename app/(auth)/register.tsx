import AppButton from "@/components/ui/AppButton";
import AppInput from "@/components/ui/AppInput";
import AppText from "@/components/ui/AppText";
import HeaderComponent from "@/components/ui/HeaderComponent";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/utils/regex";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface RegisterFormData {
  fullName: string;
  email: string;
  password: string;
}

export default function RegisterScreen() {
  const { control, handleSubmit } = useForm<RegisterFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="p-5">
          <HeaderComponent />
          <AppText className="font-outfit-semibold text-3xl">
            Create an account
          </AppText>
          <AppText variant="body" className="text-secondary mt-1">
            It&apos;s great to have you here!
          </AppText>
        </View>

        {/* Form */}
        <View className="gap-5 px-5 py-6">
          {/* Email Input */}
          <AppInput<RegisterFormData>
            control={control}
            name="fullName"
            label="Full Name"
            placeholder="Enter your full name"
            rules={{
              required: "Full name is required",
              minLength: {
                value: 2,
                message: "Full name must be at least 2 characters long",
              },
            }}
          />

          <AppInput<RegisterFormData>
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
          <AppInput<RegisterFormData>
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

          <AppText className="text-primary text-sm">
            By signing up you agree to our{" "}
            <Link href={"https://xelabyte.vercel.app"} asChild>
              <AppText className="text-primary font-outfit-medium underline text-sm">
                Terms
              </AppText>
            </Link>
            ,{" "}
            <Link href={"https://github.com/Xela-Byte"} asChild>
              <AppText className="text-primary font-outfit-medium underline text-sm">
                {" "}
                Privacy Policy
              </AppText>
            </Link>{" "}
            and{" "}
            <Link href={"https://x.com/xelaByte"} asChild>
              <AppText className="text-primary font-outfit-medium underline text-sm">
                Cookie Use
              </AppText>
            </Link>
            .
          </AppText>

          {/* Login Button */}
          <View className="mt-8">
            <AppButton
              disabled
              label="Register"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 w-full h-24 p-5">
        <Link href={"/login"} asChild>
          <AppText className="text-primary text-sm text-center">
            Already have an account?{" "}
            <AppText className="text-primary font-outfit-medium underline text-sm">
              Get in jor!
            </AppText>
          </AppText>
        </Link>
      </View>
    </SafeAreaView>
  );
}
