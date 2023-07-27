import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import * as AppleAuthentication from "expo-apple-authentication";
import { useAppleAuth } from "../lib/auth/apple-auth";

export default function SignIn() {
  return (
    <View className="flex-1 items-center justify-center dark:bg-black">
      <Text className="text-black dark:text-white">Hello world</Text>
      <StatusBar style="auto" />
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        className="w-64 h-12"
        onPress={async () => {
          await useAppleAuth();
        }}
      />
    </View>
  );
}
