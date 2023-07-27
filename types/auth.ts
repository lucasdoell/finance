import * as AppleAuthentication from "expo-apple-authentication";

export type User = {
  id: string | null;
  email: string | null;
  fullName: AppleAuthentication.AppleAuthenticationFullName | null;
};

export type AppleAuthError = {
  code: string;
};

function isErrorWithCode(error: unknown): error is AppleAuthError {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof (error as AppleAuthError).code === "string"
  );
}

export function toAppleAuthError(maybeError: unknown): AppleAuthError {
  if (isErrorWithCode(maybeError)) {
    return maybeError;
  }

  return { code: "ERR_APPLE_AUTHENTICATION" };
}
