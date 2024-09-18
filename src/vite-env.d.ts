/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_LOGIN_EMAIL: string;
  readonly VITE_APP_LOGIN_PASSWORD: string;
  // Add other environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
