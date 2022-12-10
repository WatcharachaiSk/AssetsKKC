const REACT_ENVIRONMENT = "dev";
const APP_API_URL_DEV = "http://localhost:3500/api";
const APP_API_URL_PROD = "";
export const REACT_APP_VERSION = "0.0.0";

export const baseURL =
  REACT_ENVIRONMENT === "dev" ? APP_API_URL_DEV : APP_API_URL_PROD;
