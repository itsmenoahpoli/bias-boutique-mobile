import { View } from "react-native";
import { RequestOtpForm, AppLogo } from "@/components";

export default (): JSX.Element => {
  return (
    <View className="flex-1 items-center gap-y-8 pt-[130px]">
      <AppLogo />
      <RequestOtpForm />
    </View>
  );
};
