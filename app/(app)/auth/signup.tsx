import { View } from "react-native";
import { SignupForm, AppLogo } from "@/components";

export default (): JSX.Element => {
  return (
    <View className="flex-1 items-center gap-y-8 pb-[100px]">
      <AppLogo />
      <SignupForm />
    </View>
  );
};
