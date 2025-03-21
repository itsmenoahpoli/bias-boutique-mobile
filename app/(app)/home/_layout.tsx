import {
  ImageBackground,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Slot } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ASSETS } from "@/constants";

export default (): JSX.Element => {
  const insets = useSafeAreaInsets();
  const isAndroid = Platform.OS === "android";

  return (
    <View
      style={{
        marginTop: -insets.top,
        marginBottom: -insets.bottom,
      }}
      className="flex-1"
    >
      <ImageBackground
        className="flex-1"
        resizeMode="cover"
        source={ASSETS.AUTH_BG}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            className={`flex-1 ${isAndroid ? "pt-[80px]" : "pt-[100px]"}`}
            contentContainerStyle={{
              paddingBottom: 24,
              minHeight: "100%",
            }}
            alwaysBounceVertical={false} // Prevents bouncing when content fits
          >
            <Slot />
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};
