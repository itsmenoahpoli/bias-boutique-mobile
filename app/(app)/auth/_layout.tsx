import Toast from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Slot } from "expo-router";

export default (): JSX.Element => {
  return (
    <SafeAreaView className="flex-1">
      <Slot />
    </SafeAreaView>
  );
};
