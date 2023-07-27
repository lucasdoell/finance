import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { logoutApple } from "../../lib/auth/apple-auth";
import { router } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center dark:bg-black">
      <Text className="text-black dark:text-white">Hello world</Text>
      <StatusBar style="auto" />
      <Button
        title="Go back"
        onPress={async () => {
          const isLoggedOut = await logoutApple();
          if (isLoggedOut) {
            router.push("/sign-in");
          }
        }}
      />
    </View>
  );
}
