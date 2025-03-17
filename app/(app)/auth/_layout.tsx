import { ImageBackground, View } from "react-native";
import { Slot } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ASSETS } from "@/constants";

export default (): JSX.Element => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        marginTop: -insets.top,
        marginBottom: -insets.bottom,
      }}
      className="flex-1"
    >
      <ImageBackground
        className="flex-1 pt-[30px]"
        resizeMode="cover"
        source={ASSETS.AUTH_BG}
      >
        <Slot />
      </ImageBackground>
    </View>
  );
};
