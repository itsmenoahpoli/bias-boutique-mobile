import React from "react";
import { View, Image } from "react-native";
import { ASSETS } from "@/constants";

export const AppLogo: React.FC<{ height?: number; width?: number }> = ({
  height = 32,
  width = 32,
}) => {
  return (
    <View>
      <Image
        className={`w-${width} h-${height}`}
        source={ASSETS.BRAND_LOGO}
        resizeMethod="resize"
        resizeMode="contain"
      />
    </View>
  );
};
