import { View } from "react-native";
import { SigninForm, AppLogo } from "@/components";

export default (): JSX.Element => {
  return (
    <View className="flex-1 items-center gap-y-8">
      <AppLogo />
      <SigninForm />
    </View>
  );
};
