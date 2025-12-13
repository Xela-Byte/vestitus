import AppButton from "@/components/ui/AppButton";
import AppDropdown from "@/components/ui/AppDropdown";
import AppInput from "@/components/ui/AppInput";
import HeaderComponent from "@/components/ui/HeaderComponent";
import { useAuthStore } from "@/store";
import { useRouter } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface MyDetailsFormData {
  fullName: string;
  email: string;
  gender: string;
}

const MyDetails = () => {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();
  const { control, handleSubmit, watch, setValue } = useForm<MyDetailsFormData>(
    {
      defaultValues: {
        fullName: user?.fullName || "",
        email: user?.email || "",
        gender: "",
      },
    }
  );

  const genderOptions = ["Male", "Female", "Other"];
  const selectedGender = watch("gender");

  const onSubmit = (data: MyDetailsFormData) => {
    console.log("Form data:", data);
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-5 pb-3">
        <HeaderComponent title="My Details" />
      </View>

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        <View className="gap-y-5">
          {/* Full Name */}
          <AppInput
            control={control}
            name="fullName"
            label="Full Name"
            placeholder="Enter your full name"
            rules={{ required: "Full name is required" }}
          />

          {/* Email Address (Non-editable) */}
          <AppInput
            control={control}
            name="email"
            label="Email Address"
            placeholder="Your email"
            editable={false}
            keyboardType="email-address"
          />

          {/* Gender Dropdown */}
          <AppDropdown
            label="Gender"
            options={genderOptions}
            value={selectedGender}
            onSelect={(option) => setValue("gender", option)}
            placeholder="Select gender"
          />

          <View className="mb-8" />
        </View>
      </ScrollView>

      {/* Submit Button */}
      <View className="px-5 pb-5">
        <AppButton
          label="Submit"
          onPress={handleSubmit(onSubmit)}
          className="w-full"
        />
      </View>
    </SafeAreaView>
  );
};

export default MyDetails;
