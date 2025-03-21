import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowLeft,
  Wallet,
  Ticket,
  CreditCard,
  History,
} from "lucide-react-native";

export default (): JSX.Element => {
  const router = useRouter();

  return (
    <LinearGradient colors={["#530DFF", "#110699"]} className="flex-1">
      <ScrollView className="flex-1 px-4">
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute top-6 left-4 z-10"
        >
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>

        {/* Title */}
        <Text className="text-white text-lg font-bold text-center mt-16">
          Wallet
        </Text>

        {/* Balance Section */}
        <View className="bg-white/10 p-4 rounded-lg mt-6">
          <Text className="text-white text-sm">Available Balance (₱)</Text>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-white text-3xl font-bold">0.00</Text>
            <TouchableOpacity className="bg-purple-500 px-4 py-2 rounded-full">
              <Text className="text-white font-semibold">Cash In</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="mt-2 flex-row items-center">
            <Text className="text-yellow-300 text-sm">
              💰 Rebates (₱) 0.00 &gt;
            </Text>
          </TouchableOpacity>
        </View>

        {/* Verification Section */}
        <TouchableOpacity className="bg-white/10 p-4 rounded-lg mt-4 flex-row items-center">
          <View className="w-8 h-8 bg-white/20 rounded-full items-center justify-center">
            <Wallet size={18} color="white" />
          </View>
          <Text className="text-white text-sm ml-3">
            Verify your account to secure your transactions
          </Text>
        </TouchableOpacity>

        {/* Wallet Features */}
        <View className="mt-6 flex-row flex-wrap justify-center gap-6">
          {[
            {
              label: "Transaction History",
              icon: <History size={32} color="white" />,
            },
            {
              label: "Payment Options",
              icon: <CreditCard size={32} color="white" />,
            },
            { label: "Cash-In", icon: <Wallet size={32} color="white" /> },
            { label: "Voucher", icon: <Ticket size={32} color="white" /> },
          ].map((item, index) => (
            <TouchableOpacity key={index} className="items-center">
              <LinearGradient
                colors={["#FF09D8", "#110699"]}
                className="w-20 h-20 rounded-full items-center justify-center"
              >
                {item.icon}
              </LinearGradient>
              <Text className="text-white text-sm mt-2">{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
