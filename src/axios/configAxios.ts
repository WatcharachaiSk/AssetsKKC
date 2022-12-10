const configAxios = (
  method: 'get' | 'post' | 'put',
  url: string,
  data?: object,
) => {
  const config = {
    method: method,
    url: url,
    headers: {
      'x-access-token': ``, //`isToken`
    },
    timeout: 10000,
    data: data,
  };
  return config;
};

export default configAxios;
