import * as AppleAuthentication from "expo-apple-authentication";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";

export async function isAppleAuthAvailable() {
  return await AppleAuthentication.isAvailableAsync();
}

export async function useAppleAuth() {
  const credential = await SecureStore.getItemAsync("apple-auth-credential");

  // If we already have an Apple credential, skip the sign in flow.
  if (credential) {
    console.log("Found Apple credential in secure store.");
    router.push("/home");
    return;
  }

  // If we don't have an Apple credential, try to sign in.
  try {
    const credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
    });

    // Signed in!
    console.log("Successfully authed with Apple.");
    console.log("credential: ", credential);

    // Store the credential in secure store.
    await SecureStore.setItemAsync(
      "apple-auth-credential",
      JSON.stringify(credential)
    );

    // Navigate to the home screen.
    router.push("/home");
  } catch (e) {
    if (e.code === "ERR_REQUEST_CANCELED") {
      // handle that the user canceled the sign-in flow
      console.log("User cancelled Apple sign in.");
    } else {
      // handle other errors
      console.log(e);
    }
  }
}

export async function getAppleLoginCredential() {
  const credential = await SecureStore.getItemAsync("apple-auth-credential");
  return credential ? JSON.parse(credential) : null;
}

export async function logoutApple() {
  await SecureStore.deleteItemAsync("apple-auth-credential");
  console.log("Successfully logged out of Apple.");
  return true;
}

export async function getUserDetailsFromCredentials() {
  const credential = await SecureStore.getItemAsync("apple-auth-credential");
  if (!credential) {
    return null;
  }

  const {
    user,
    email,
    fullName,
  }: {
    user: string;
    email: string | null;
    fullName: AppleAuthentication.AppleAuthenticationFullName;
  } = JSON.parse(credential);

  return {
    id: user,
    email,
    fullName,
  };
}
