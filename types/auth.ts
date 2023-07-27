import * as AppleAuthentication from "expo-apple-authentication";

export type User = {
  id: string | null;
  email: string | null;
  fullName: AppleAuthentication.AppleAuthenticationFullName;
};
