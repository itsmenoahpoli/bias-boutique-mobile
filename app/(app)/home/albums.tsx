import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { ArrowLeft, Search, Star } from "lucide-react-native";

const albums = [
  {
    id: "1",
    name: "BTS Butter Sealed Album",
    price: "₱450.00",
    rating: "5.0",
    sold: "129",
    image: "https://via.placeholder.com/100", // Replace with actual image URL
  },
  {
    id: "2",
    name: "SVT Haven Carat Ver.",
    price: "₱350.00",
    rating: "5.0",
    sold: "146",
    image: "https://via.placeholder.com/100",
  },
  {
    id: "3",
    name: "Blackpink BORN PINK",
    price: "₱780.00",
    rating: "4.8",
    sold: "723",
    image: "https://via.placeholder.com/100",
  },
  {
    id: "4",
    name: "Enhypen Manifesto",
    price: "₱375.00",
    rating: "5.0",
    sold: "328",
    image: "https://via.placeholder.com/100",
  },
  {
    id: "5",
    name: "LE SSERAFIM Fearless",
    price: "₱620.00",
    rating: "4.9",
    sold: "476",
    image: "https://via.placeholder.com/100",
  },
  {
    id: "6",
    name: "Twice Fancy You",
    price: "₱650.00",
    rating: "5.0",
    sold: "682",
    image: "https://via.placeholder.com/100",
  },
];

export default (): JSX.Element => {
  return (
    <View className="flex-1 px-4 pt-12 bg-purple-900">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-4">
        <TouchableOpacity>
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold">Albums</Text>
        <TouchableOpacity>
          <Search size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Albums List */}
      <FlatList
        data={albums}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View className="bg-white/10 rounded-lg p-3 mb-4 w-[48%]">
            <Image
              source={{ uri: item.image }}
              className="w-full h-28 rounded-md"
            />
            <Text className="text-white mt-2 font-semibold text-sm">
              {item.name}
            </Text>
            <Text className="text-white text-xs opacity-70">{item.price}</Text>
            <View className="flex-row items-center mt-1">
              <Star size={14} color="yellow" />
              <Text className="text-white text-xs ml-1">{item.rating}</Text>
              <Text className="text-white text-xs opacity-70 ml-2">
                {item.sold} sold
              </Text>
            </View>
            <View className="absolute top-2 right-2 bg-purple-600 px-2 py-1 rounded-full">
              <Text className="text-white text-xs">✨</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
