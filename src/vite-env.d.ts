/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_LOGIN_EMAIL: string;
  readonly VITE_APP_LOGIN_PASSWORD: string;
  readonly VITE_APP_POST_AND_GET_CAMPAIGNS: string;
  readonly VITE_APP_POST_UNSUSCRIBE_USERS: string;
  readonly VITE_APP_POST_LOGIN: string;
  readonly VITE_APP_GET_SUPRESSION_LIST: string;
  readonly VITE_APP_GET_CAMPAIGNS_ID: string;
  readonly VITE_APP_GET_STATISTIC: string;
  readonly VITE_APP_GET_STATISTIC_TOTAL: string;
  readonly VITE_APP_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
