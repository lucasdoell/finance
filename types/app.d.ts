/// <reference types="nativewind/types" />

import { z } from "zod";

const envVariables = z.object({
  PLAID_CLIENT_ID: z.string(),
  PLAID_SECRET: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
