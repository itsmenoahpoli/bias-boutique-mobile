import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TextInput, Pressable } from "react-native";

export const SigninForm: React.FC = () => {
  const router = useRouter();

  const redirectToResetPassword = () => {
    router.push("/(app)/auth/reset-password");
  };

  const redirectToSignup = () => {
    router.push("/(app)/auth/signup");
  };

  return (
    <View className="w-[90%] bg-white rounded-2xl px-10 py-7">
      <Text className="text-2xl font-medium">Sign in</Text>
      <Text className="text-sm text-gray-500 mt-2 mb-6">
        Please input your account credentials
      </Text>

      <View className="flex flex-col gap-y-3">
        <View className="flex flex-col">
          <Text className="text-sm text-gray-400">E-mail Address</Text>
          <TextInput className="border-b border-gray-200 py-2" />
        </View>

        <View className="flex flex-col">
          <Text className="text-sm text-gray-400">Password</Text>
          <TextInput className="border-b border-gray-200 py-2" />
        </View>

        <View className="flex flex-row justify-end">
          <Pressable onPress={redirectToResetPassword}>
            <Text className="text-sm text-blue-700 underline underline-offset-2">
              Forgot password?
            </Text>
          </Pressable>
        </View>

        <Pressable className="bg-primary py-3 rounded-full items-center">
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
  );
};
