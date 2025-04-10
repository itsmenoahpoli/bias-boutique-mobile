import { View } from "react-native";
import { Slot, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import "@/app.css";

export default (): JSX.Element => {
  const insets = useSafeAreaInsets();
  const pathname = usePathname();

  const isRoot = pathname === "/";

  return (
    <View
      style={{
        marginTop: isRoot ? -insets.top : 0,
        marginBottom: -insets.bottom,
      }}
      className="flex-1"
    >
      <StatusBar style="light" />
      <Toast />
      <Slot />
    </View>
  );
};
