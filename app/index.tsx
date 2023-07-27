import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { getAppleLoginCredential } from "../lib/auth/apple-auth";

export default function App() {
  useEffect(() => {
    // check if auth is found in Secure Store
    const isAuthed = getAppleLoginCredential().then((res) => {
      if (res === null) {
        console.log("No auth found in Secure Store");
        return false;
      }
      console.log("Successfully retrieved auth from Secure Store");
      return true;
    });

    // if auth is found, push to home
    if (isAuthed) {
      setTimeout(() => {
        router.push("/home");
      }, 1);
    }

    // if auth is not found, push to sign-in
    setTimeout(() => {
      router.push("/sign-in");
    }, 1);
  }, []);

  return (
    <View className="flex-1 items-center justify-center dark:bg-black">
      <Text className="text-black dark:text-white">Hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}
