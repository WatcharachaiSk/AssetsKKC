import AsyncStorage from "@react-native-async-storage/async-storage";


const configAxios = async (
  method: 'get' | 'post' | 'put',
  url: string,
  data?: object,
) => {

  const config = {
    method: method,
    url: url,
    headers: {
      //'x-access-token': `${await AsyncStorage.getItem("accessToken")}`, //`isToken`
      'x-access-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiYWRtaW4iOiIxIiwiaWF0IjoxNjcwMzQ2Mjc0fQ.NSoPTW0gDx3L7I-8D58HyKKsMu4WnAcpq4Aj5zNses0`, //`isToken`
    },
    timeout: 10000,
    data: data,
  };
  console.log(config);

  return config;
};

export default configAxios;
