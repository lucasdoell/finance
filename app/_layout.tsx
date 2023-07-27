import { Slot } from "expo-router";
import { Appearance, ColorSchemeName, useColorScheme } from "react-native";
import * as SystemUI from "expo-system-ui";
import { useEffect, useState } from "react";
import { UserProvider } from "../lib/context/user-context";
import { getUserDetailsFromCredentials } from "../lib/auth/apple-auth";
import { User } from "../types/auth";

export default function HomeLayout() {
  const colorScheme = useColorScheme();
  handleBGColorChange(colorScheme);

  Appearance.addChangeListener(({ colorScheme }) => {
    handleBGColorChange(colorScheme);
  });

  const [user, setUser] = useState<User>({
    id: null,
    email: null,
    fullName: null,
  });

  useEffect(() => {
    getUserDetailsFromCredentials().then((res) => {
      setUser({
        id: res?.id || null,
        email: res?.email || null,
        fullName: res?.fullName || null,
      });
    });
  }, []);

  return (
    <UserProvider value={{ user, setUser }}>
      <Slot />
    </UserProvider>
  );
}

function handleBGColorChange(colorScheme: ColorSchemeName) {
  if (colorScheme === "dark") {
    SystemUI.setBackgroundColorAsync("black");
  } else {
    SystemUI.setBackgroundColorAsync("white");
  }
}
