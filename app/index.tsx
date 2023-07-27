import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { getAppleLoginCredential } from "../lib/auth/apple-auth";

export default function App() {
  useEffect(() => {
    // check if auth is found in Secure Store
    getAppleLoginCredential().then((res) => {
      if (res === null) {
        console.log("No auth found in Secure Store");
        setTimeout(() => {
          router.push("/sign-in");
        }, 1);
      }
      console.log("Successfully retrieved auth from Secure Store");
      setTimeout(() => {
        router.push("/home");
      }, 1);
    });
  }, []);

  return (
    <View className="flex-1 items-center justify-center dark:bg-black">
      <Text className="text-black dark:text-white">Hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}
