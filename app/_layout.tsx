import { View } from "react-native";
import { Slot } from "expo-router";
import "@/app.css";

export default (): JSX.Element => {
  return (
    <View className="flex-1 bg-red-800">
      <Slot />
    </View>
  );
};
