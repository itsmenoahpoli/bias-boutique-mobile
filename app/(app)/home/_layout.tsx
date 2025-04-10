import {
  ImageBackground,
  Image,
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { ShoppingCart, ClipboardList, Wallet, User } from "lucide-react-native";
import { Slot, usePathname, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ASSETS } from "@/constants";

export default (): JSX.Element => {
  const pathname = usePathname();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleRedirect = (page: string) => {
    // @ts-ignore
    router.push(`/(app)/home/${page}`);
  };

  const hideFooter = () => {
    return (
      pathname === "/home/pricing" ||
      pathname === "/home/shopping-cart" ||
      pathname === "/home/checkout-payment"
    );
  };

  return (
    <View
      style={{
        marginTop: -insets.top,
        marginBottom: -insets.bottom,
      }}
      className="flex-1 relative"
    >
      <ImageBackground
        className={`flex-1 relative`}
        resizeMode="cover"
        source={ASSETS.AUTH_BG}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <View className="flex-1">
            <Slot />
          </View>

          {/* Fixed footer */}
          {hideFooter() ? null : (
            <View
              className={`absolute bottom-5 left-0 right-0 flex-row justify-around items-center bg-white/60 py-1 rounded-full mx-4`}
            >
              <TouchableOpacity
                className="items-center"
                onPress={() => handleRedirect("shopping-cart")}
              >
                <ShoppingCart color="white" size={24} />
                <Text className="text-white text-sm">Cart</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="items-center"
                onPress={() => handleRedirect("orders")}
              >
                <ClipboardList color="white" size={24} />
                <Text className="text-white text-sm">Orders</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="items-center"
                onPress={() => handleRedirect("mainhome")}
              >
                <View className="items-center justify-center">
                  <Image
                    className={`w-16 h-16`}
                    source={ASSETS.BRAND_LOGO}
                    resizeMethod="resize"
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                className="items-center"
                onPress={() => handleRedirect("wallet")}
              >
                <Wallet color="white" size={24} />
                <Text className="text-white text-sm">Wallet</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="items-center"
                onPress={() => handleRedirect("profile")}
              >
                <User color="white" size={24} />
                <Text className="text-white text-sm">Profile</Text>
              </TouchableOpacity>
            </View>
          )}
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};
