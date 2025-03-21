import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

const plans = [
  {
    id: "free",
    title: "7 days free",
    price: "₱1788 billed annually after trial",
  },
  { id: "monthly", title: "Monthly", price: "₱149 per month" },
  {
    id: "annual",
    title: "Annual",
    price: "₱894 per year",
    discount: "₱74.5 / month",
  },
];

export default function PricingPlan() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = React.useState<string | null>("free");

  const redirectToHome = () => {
    router.push("/(app)/home/home");
  };

  return (
    <View className="flex-1 items-center justify-center px-6">
      <Text className="text-white text-2xl font-bold">Pricing Plan</Text>
      <Text className="text-white text-sm text-center mt-2 opacity-70">
        Choose a subscription plan to unlock all the functionality of the
        application
      </Text>

      <View className="w-full flex flex-col mt-6 gap-y-4">
        {plans.map((plan) => (
          <TouchableOpacity
            key={plan.id}
            onPress={() => setSelectedPlan(plan.id)}
            className={`p-4 rounded-xl border w-full ${
              selectedPlan === plan.id
                ? "bg-purple-500/50 border-purple-500"
                : "bg-blue-500/20 border-blue-500"
            }`}
          >
            <Text className="text-white text-lg font-semibold">
              {plan.title}
            </Text>
            <Text className="text-white text-sm opacity-70">{plan.price}</Text>

            {plan.discount && (
              <View className="absolute top-2 right-2 bg-purple-600 px-2 py-1 rounded-lg">
                <Text className="text-white text-xs">{plan.discount}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <Text className="text-white text-sm opacity-70 mt-4">Cancel anytime</Text>
      <Text className="text-white text-xs opacity-50">Terms and Condition</Text>

      <TouchableOpacity
        className="mt-6 bg-white/20 px-6 py-3 rounded-xl"
        onPress={redirectToHome}
      >
        <Text className="text-white text-lg font-semibold">
          CONTINUE TO PURCHASE
        </Text>
      </TouchableOpacity>
    </View>
  );
}
