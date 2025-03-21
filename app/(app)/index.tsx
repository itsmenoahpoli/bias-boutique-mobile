import React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { AppSplashScreen } from "@/components";

export default (): JSX.Element => {
  const router = useRouter();

  const handleRedirect = () => {
    setTimeout(() => {
      router.replace("/(app)/home/mainhome");
    }, 1000);
  };

  React.useEffect(() => {
    handleRedirect();
  }, []);

  return (
    <View className="flex-1">
      <AppSplashScreen />
    </View>
  );
};
