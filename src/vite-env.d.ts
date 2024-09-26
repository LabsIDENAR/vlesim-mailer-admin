/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_LOGIN_EMAIL: string;
  readonly VITE_APP_LOGIN_PASSWORD: string;
  readonly VITE_APP_POST_AND_GET_CAMPAIGNS: string;
  readonly VITE_APP_POST_UNSUSCRIBE_USERS: string;
  readonly VITE_APP_POST_LOGIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
