import { AppEnvironments, type AppEnvironment } from "@@types/settings";

const checkEnvironment = (env: AppEnvironment) => {
  return env === CURRENT_APP_ENV;
};

const CURRENT_APP_ENV: AppEnvironment = process.env
  .EXPO_PUBLIC_ENV as AppEnvironment;

const APP_API_URL: string = process.env.EXPO_PUBLIC_API_URL as string;

const IS_DEV: boolean = checkEnvironment(AppEnvironments.DEV);
const IS_QA: boolean = checkEnvironment(AppEnvironments.QA);
const IS_PROD: boolean = checkEnvironment(AppEnvironments.PROD);

const SECRET_PASSKEY: string = process.env.EXPO_PUBLIC_SECRET_PASSKEY as string;
const ENCRYPTION_CONFIG = { mode: "cbc", ks: 256 } as any;

export const SETTINGS = {
  CURRENT_APP_ENV,
  APP_API_URL,
  IS_DEV,
  IS_QA,
  IS_PROD,
  SECRET_PASSKEY,
  ENCRYPTION_CONFIG,
} as const;
