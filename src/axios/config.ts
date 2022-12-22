const REACT_ENVIRONMENT:string = "testApi";

/*
  android: "http://10.0.2.2:3500",
  web: "http://127.0.0.1:3500",
*/
const APP_API_URL_DEV = "http://10.0.2.2:3500/api";
const APP_API_URL_PROD = "http://203.158.201.118/api";
export const REACT_APP_VERSION = "0.0.0";

export const baseURL = REACT_ENVIRONMENT === "dev" ? APP_API_URL_DEV : APP_API_URL_PROD;
