import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import {
  Wallet,
  Ticket,
  Clock,
  Star,
  User,
  HelpCircle,
  MessageCircle,
} from "lucide-react-native";

export default (): JSX.Element => {
  return (
    <LinearGradient colors={["#530DFF", "#110699"]} className="flex-1">
      <ScrollView className="flex-1 px-4">
        {/* Profile Section */}
        <View className="items-center pt-16 pb-6">
          <Image
            source={{ uri: "https://via.placeholder.com/80" }}
            className="w-20 h-20 rounded-full border-2 border-white bg-orange-600"
          />
          <Text className="text-white text-lg font-bold mt-2">
            Juan Dela Cruz
          </Text>
          <Text className="text-white text-xs">
            0 Wishlist | 0 Followers | 0 Following
          </Text>
        </View>

        {/* My Orders */}
        <View className="bg-white/10 p-4 rounded-lg">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-white font-semibold text-lg">My Orders</Text>
            <TouchableOpacity>
              <Text className="text-blue-400 text-sm">
                View All Orders &gt;
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between">
            {[
              { label: "To Pay", icon: "💰" },
              { label: "To Ship", icon: "📦" },
              { label: "To Receive", icon: "🚚" },
              { label: "To Review", icon: "📝" },
              { label: "Returns", icon: "🔄" },
            ].map((item, index) => (
              <TouchableOpacity key={index} className="items-center">
                <View className="w-12 h-12 bg-white/20 rounded-full items-center justify-center">
                  <Text className="text-lg">{item.icon}</Text>
                </View>
                <Text className="text-white text-xs mt-1">{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* My Wallet */}
        <View className="bg-white/10 p-4 rounded-lg mt-4">
          <Text className="text-white font-semibold text-lg mb-3">
            My Wallet
          </Text>
          <View className="flex-row justify-between">
            <View className="flex-1 bg-white/20 p-3 rounded-lg mr-2">
              <Text className="text-white text-xs">PHP</Text>
              <Text className="text-white text-xl font-bold">0.00</Text>
              <TouchableOpacity className="mt-2 bg-purple-500 rounded-full py-1">
                <Text className="text-white text-center text-sm">Cash In</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-1 bg-white/20 p-3 rounded-lg">
              <Text className="text-white text-xs">Payment Options</Text>
              <TouchableOpacity className="mt-2 bg-purple-500 rounded-full py-1">
                <Text className="text-white text-center text-sm">
                  Link Cards
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="mt-2 bg-purple-500 rounded-full py-1">
                <Text className="text-white text-center text-sm">View</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Menu Items */}
        <View className="bg-white/10 p-4 rounded-lg mt-4">
          {[
            { label: "Voucher", icon: <Ticket size={20} color="white" /> },
            {
              label: "Recently Viewed",
              icon: <Clock size={20} color="white" />,
            },
            { label: "My Ratings", icon: <Star size={20} color="white" /> },
            {
              label: "Account Settings",
              icon: <User size={20} color="white" />,
            },
            {
              label: "Help Center",
              icon: <HelpCircle size={20} color="white" />,
            },
            {
              label: "Chat Assistant",
              icon: <MessageCircle size={20} color="white" />,
            },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center py-3 border-b border-white/20"
            >
              {item.icon}
              <Text className="text-white text-sm ml-4">{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};
