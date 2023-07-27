import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { logoutApple } from "../../lib/auth/apple-auth";
import UserContext from "../../lib/context/user-context";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <View className="flex-1 items-center justify-center dark:bg-black">
      <Text className="text-black dark:text-white">
        Hello {user.fullName?.givenName || "user"}
      </Text>
      <StatusBar style="auto" />
      <Button
        title="Log out"
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
