import React, { type PropsWithChildren } from "react";
import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { MoveLeft } from "lucide-react-native";

export const AppHeader: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = (props) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <View className="h-[100px] w-full bg-blue-500 flex flex-row justify-between items-end pb-[15px] px-[30px] mb-3">
      <View className="w-1/3 flex items-start">
        <Pressable onPress={handleGoBack}>
          <MoveLeft color="white" />
        </Pressable>
      </View>
      <View className="w-1/3 flex items-center">
        <Text className="text-lg text-white font-medium">{props.title}</Text>
      </View>
      <View className="w-1/3 flex items-end">{props.children}</View>
    </View>
  );
};
