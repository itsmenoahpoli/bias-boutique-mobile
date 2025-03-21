import React from "react";
import { View, Text, Pressable } from "react-native";
import { Check } from "lucide-react-native";

export const AppCheckbox: React.FC<{
  label: string;
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
  className?: string;
}> = (props) => {
  return (
    <Pressable
      className={`flex-row items-center ${props.className}`}
      onPress={() => props.onCheck?.(!props.checked)}
    >
      <View
        className={`w-5 h-5 rounded border items-center justify-center mr-2 ${
          props.checked ? "bg-primary border-primary" : "border-gray-300"
        }`}
      >
        {props.checked && <Check size={14} color="white" strokeWidth={3} />}
      </View>
      <Text className="text-xs text-gray-800">{props.label}</Text>
    </Pressable>
  );
};
