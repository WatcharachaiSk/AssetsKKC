import AsyncStorage from "@react-native-async-storage/async-storage";


const configAxios = async (
  method: 'get' | 'post' | 'put',
  url: string,
  data?: object,
) => {
  let token: any = await AsyncStorage.getItem("accessToken");
  const config = {
    method: method,
    url: url,
    headers: {
      //'x-access-token': `${await AsyncStorage.getItem("accessToken")}`, //`isToken`
      'x-access-token': token, //`isToken`
    },
    timeout: 10000,
    data: data,
  };
  //console.log(config);

  return config;
};

export default configAxios;
