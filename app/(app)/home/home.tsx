import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Bell, Settings, Search, SlidersHorizontal } from "lucide-react-native";

export default (): JSX.Element => {
  return (
    <View className="flex-1 px-4 pt-12">
      {/* Header */}
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-white text-lg">Good Morning 👋</Text>
          <Text className="text-white text-2xl font-bold">Juan Dela Cruz</Text>
        </View>
        <View className="flex-row space-x-4">
          <Bell size={24} color="white" />
          <Settings size={24} color="white" />
        </View>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-white/20 rounded-full px-4 py-2 mt-4">
        <Search size={20} color="white" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="white"
          className="flex-1 text-white ml-2"
        />
        <SlidersHorizontal size={20} color="white" />
      </View>

      {/* Special Offers */}
      <View className="flex-row justify-between items-center mt-6">
        <Text className="text-white text-lg font-semibold">Special Offers</Text>
        <TouchableOpacity>
          <Text className="text-white text-sm opacity-70">See All</Text>
        </TouchableOpacity>
      </View>

      <View className="bg-purple-500/20 p-4 rounded-xl mt-2 relative">
        <Text className="text-white text-lg font-bold">11.11</Text>
        <Text className="text-white font-semibold">Free Shipping Special</Text>
        <Text className="text-white text-xs opacity-70">
          Get a free shipping for every checkout. Only valid until 11-15
        </Text>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }} // Replace with actual image
          className="absolute right-2 bottom-2 w-24 h-16 rounded-md"
        />
      </View>

      {/* Categories */}
      <View className="grid grid-cols-4 gap-4 mt-6">
        {[
          "Albums",
          "Photocards",
          "Lightsticks",
          "Clothing",
          "Accessories",
          "Stationary",
          "Beauty Products",
          "Home Goods",
        ].map((category) => (
          <TouchableOpacity key={category} className="items-center">
            <View className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Text className="text-white text-xs font-semibold">
                {category}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View className="absolute bottom-4 left-0 right-0 flex-row justify-around bg-white/10 py-3 rounded-full mx-4">
        {["Cart", "Orders", "Wallet", "Profile"].map((item) => (
          <TouchableOpacity key={item} className="items-center">
            <Text className="text-white text-sm">{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
