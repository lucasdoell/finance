import { Slot } from "expo-router";
import { Appearance, ColorSchemeName, useColorScheme } from "react-native";
import * as SystemUI from "expo-system-ui";

export default function HomeLayout() {
  const colorScheme = useColorScheme();
  handleBGColorChange(colorScheme);

  Appearance.addChangeListener(({ colorScheme }) => {
    handleBGColorChange(colorScheme);
  });

  return <Slot />;
}

function handleBGColorChange(colorScheme: ColorSchemeName) {
  if (colorScheme === "dark") {
    SystemUI.setBackgroundColorAsync("black");
  } else {
    SystemUI.setBackgroundColorAsync("white");
  }
}
