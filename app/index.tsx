import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center dark:bg-black">
      <Text className="text-black dark:text-white">Hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}
