import React from "react";
import { View, ImageBackground } from "react-native";
import { ASSETS } from "@/constants";

export const AppSplashScreen: React.FC = () => {
  return (
    <ImageBackground
      className="flex-1 justify-center align-center"
      resizeMode="cover"
      source={{ uri: ASSETS.AUTH_BG }}
    >
      <View className="flex-1"></View>
    </ImageBackground>
  );
};
