import React from "react";
import { View, Image } from "react-native";
import { ASSETS } from "@/constants";

export const AppLogo: React.FC = () => {
  return (
    <View>
      <Image
        className={`w-32 h-32`}
        source={ASSETS.BRAND_LOGO}
        resizeMethod="resize"
        resizeMode="contain"
      />
    </View>
  );
};
