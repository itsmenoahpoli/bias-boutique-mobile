import { useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Bell, Settings, Search, SlidersHorizontal } from "lucide-react-native";

const categoriesRow1 = [
  { name: "Albums", page: "albums" },
  { name: "Photocards", page: "photocards" },
  { name: "Lightsticks", page: "lightsticks" },
  { name: "Clothing", page: "clothing" },
];

const categoriesRow2 = [
  { name: "Accessories", page: "accessories" },
  { name: "Stationary", page: "stationary" },
  { name: "Beauty Products", page: "beauty-products" },
  { name: "Home Goods", page: "home-goods" },
];

export default (): JSX.Element => {
  const router = useRouter();

  const handleRedirect = (page: string) => {
    // @ts-ignore
    router.push(`/(app)/home/${page}`);
  };

  return (
    <View className="flex-1 px-4 pt-12 relative">
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

      <View className="flex-row items-center bg-white/20 rounded-full px-4 py-2 mt-4">
        <Search size={20} color="white" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="white"
          className="flex-1 text-white ml-2"
        />
        <SlidersHorizontal size={20} color="white" />
      </View>

      <View className="flex-row justify-between items-center mt-6">
        <Text className="text-white text-lg font-semibold">Special Offers</Text>
        <TouchableOpacity>
          <Text className="text-white text-sm opacity-70">See All</Text>
        </TouchableOpacity>
      </View>

      <View className="min-h-[150px] bg-purple-500/20 p-4 rounded-xl mt-2 relative">
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

      <View className="flex flex-row justify-center gap-4 mt-6 px-10">
        {categoriesRow1.map((category) => (
          <TouchableOpacity
            key={category.page}
            className="w-1/4 items-center"
            onPress={() => handleRedirect(category.page)}
          >
            <View className="w-full h-16 bg-blue-200/50 rounded-full flex items-center justify-center">
              <Text className="text-white text-xs font-semibold text-center">
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View className="flex flex-row justify-center gap-4 mt-6 px-10">
        {categoriesRow2.map((category, index) => (
          <TouchableOpacity
            key={category.page}
            className="w-1/4 items-center"
            onPress={() => handleRedirect(category.page)}
          >
            <View className="w-full h-16 bg-blue-200/50 rounded-full flex items-center justify-center">
              <Text className="text-white text-xs font-semibold text-center">
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
