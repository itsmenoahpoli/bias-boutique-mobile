import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TextInput, Pressable } from "react-native";
import { Facebook, Twitter } from "lucide-react-native";

export const SigninForm: React.FC = () => {
  const router = useRouter();

  const redirectToResetPassword = () => {
    router.push("/(app)/auth/reset-password");
  };

  const redirectToSignup = () => {
    router.push("/(app)/auth/signup");
  };

  const redirectToPricing = () => {
    router.push("/(app)/home/pricing");
  };

  return (
    <View className="flex-1 items-center">
      <View className="w-[90%] bg-white rounded-2xl px-10 py-7">
        <Text className="text-2xl font-medium">Sign in</Text>
        <Text className="text-sm text-gray-500 mt-2 mb-6">
          Please input your account credentials
        </Text>

        <View className="flex flex-col gap-y-3">
          <View className="flex flex-col">
            <Text className="text-sm text-gray-400">E-mail Address</Text>
            <TextInput
              className="border-b border-gray-200 py-2"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View className="flex flex-col">
            <Text className="text-sm text-gray-400">Password</Text>
            <TextInput
              className="border-b border-gray-200 py-2"
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          <View className="flex flex-row justify-end">
            <Pressable onPress={redirectToResetPassword}>
              <Text className="text-sm text-blue-700 underline underline-offset-2">
                Forgot password?
              </Text>
            </Pressable>
          </View>

          {/* Or divider */}
          <View className="flex-row items-center mt-5">
            <View className="flex-1 h-[1px] bg-gray-300" />
            <Text className="mx-4 text-gray-500">or</Text>
            <View className="flex-1 h-[1px] bg-gray-300" />
          </View>

          {/* Social login buttons */}
          <View className="flex-row justify-between mt-3">
            <Pressable className="w-[30%] py-2 rounded-full bg-[#1877F2] items-center justify-center">
              <Facebook size={24} color="white" />
            </Pressable>

            <Pressable className="w-[30%] py-2 rounded-full bg-white border border-gray-300 items-center justify-center">
              <View className="w-6 h-6">
                <Text
                  className="text-center font-bold"
                  style={{ fontSize: 16 }}
                >
                  G
                </Text>
              </View>
            </Pressable>

            <Pressable className="w-[30%] py-2 rounded-full bg-[#1DA1F2] items-center justify-center">
              <Twitter size={24} color="white" />
            </Pressable>
          </View>

          <Pressable
            className="bg-primary py-3 rounded-full items-center mt-5"
            onPress={redirectToPricing}
          >
            <Text className="text-lg text-white font-medium">Sign In</Text>
          </Pressable>

          <Pressable
            className="bg-slate-200 py-3 rounded-full items-center"
            onPress={redirectToSignup}
          >
            <Text className="text-lg text-gray-800 font-medium">
              Create an Account
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
