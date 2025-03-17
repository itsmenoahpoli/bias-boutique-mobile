import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TextInput, Pressable } from "react-native";

export const RequestOtpForm: React.FC = () => {
  const router = useRouter();

  const redirectToSignin = () => {
    router.push("/(app)/auth/signin");
  };

  return (
    <View className="w-[90%] bg-white rounded-2xl px-10 py-7">
      <Text className="text-2xl font-medium">Reset Password</Text>
      <Text className="text-sm text-gray-500 mt-2 mb-6">
        Please input your registered e-mail address
      </Text>

      <View className="flex flex-col gap-y-3">
        <View className="flex flex-col">
          <Text className="text-sm text-gray-400">E-mail Address</Text>
          <TextInput className="border-b border-gray-200 py-2" />
        </View>

        <Pressable className="bg-primary py-3 rounded-full items-center">
          <Text className="text-lg text-white font-medium">Send OTP</Text>
        </Pressable>

        <Pressable
          className="bg-slate-200 py-3 rounded-full items-center"
          onPress={redirectToSignin}
        >
          <Text className="text-lg text-gray-800 font-medium">
            Back to sign-in
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
