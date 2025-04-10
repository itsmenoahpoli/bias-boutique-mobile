import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function CheckoutPayment() {
  const xenditPaymentUrl =
    "https://checkout-staging.xendit.co/web/67f61bdf5057dc449eae41e1";

  return (
    <View className="flex-1">
      <WebView style={styles.container} source={{ uri: xenditPaymentUrl }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
