import {
  ImageBackground,
  Image,
  View,
  Text,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { ShoppingCart, ClipboardList, Wallet, User } from "lucide-react-native";
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
        className="flex-1 pt-[50px]"
        resizeMode="cover"
        source={ASSETS.AUTH_BG}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <Slot />

          <View className="absolute bottom-4 left-0 right-0 flex-row justify-around items-center bg-white/60 py-3 rounded-full mx-4">
            <TouchableOpacity className="items-center">
              <ShoppingCart color="white" size={24} />
              <Text className="text-white text-sm">Cart</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center">
              <ClipboardList color="white" size={24} />
              <Text className="text-white text-sm">Orders</Text>
            </TouchableOpacity>

            <View className="items-center justify-center">
              <Image
                className={`w-16 h-16`}
                source={ASSETS.BRAND_LOGO}
                resizeMethod="resize"
                resizeMode="contain"
              />
            </View>

            <TouchableOpacity className="items-center">
              <Wallet color="white" size={24} />
              <Text className="text-white text-sm">Wallet</Text>
            </TouchableOpacity>

            <TouchableOpacity className="items-center">
              <User color="white" size={24} />
              <Text className="text-white text-sm">Profile</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};
