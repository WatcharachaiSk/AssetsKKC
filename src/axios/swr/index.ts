import httpClient from '../interceptors'

export const fetch = (url: string, params?: any) =>
  httpClient.get(url, {params}).then(res => res.data);
