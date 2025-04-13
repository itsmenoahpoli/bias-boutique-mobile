import { View, Text, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { AppHeader } from "@/components";

const CheckoutFooter = (props: { handleCheckout: () => void }) => {
  return (
    <View className="w-full h-[80px] bg-white/80 p-4 rounded-t-xl absolute bottom-0">
      <View className="flex-row justify-between">
        <Text className="text-xl">
          Total <Text className="font-bold">PHP 575.99</Text>
        </Text>

        <Pressable
          className="bg-[#295796] rounded-xl py-4 px-6"
          onPress={props.handleCheckout}
        >
          <Text className="text-white font-medium">Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default function ShoppingCart() {
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/home/checkout-payment");
  };

  return (
    <View className="flex-1">
      <AppHeader title="Shopping Cart">
        <Pressable>
          <Text className="text-white">Edit</Text>
        </Pressable>
      </AppHeader>

      <View className="flex-1">
        <View className="flex-1 px-8 pb-[85px]">
          <ScrollView className="flex-1 border border-white"></ScrollView>
        </View>

        <CheckoutFooter handleCheckout={handleCheckout} />
      </View>
    </View>
  );
}
