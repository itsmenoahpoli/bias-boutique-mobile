import { View } from "react-native";
import { AppSplashScreen } from "@/components";

export default (): JSX.Element => {
  return (
    <View className="flex-1 bg-red-800">
      <AppSplashScreen />
    </View>
  );
};
