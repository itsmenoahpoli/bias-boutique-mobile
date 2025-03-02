import Toast from "react-native-toast-message";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import { Slot } from "expo-router";
import "@/app.css";

SplashScreen.hideAsync();

export default (): JSX.Element => {
  return (
    <View className="flex-1">
      <Toast />
      <Slot />
    </View>
  );
};
