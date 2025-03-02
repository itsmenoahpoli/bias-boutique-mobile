import React from "react";
import { ImageBackground } from "react-native";
import { ASSETS } from "@/constants";

export const AppSplashScreen: React.FC = () => {
  return (
    <ImageBackground
      className="flex-1"
      resizeMode="cover"
      source={ASSETS.AUTH_BG}
    />
  );
};
