import axios from 'axios';
import {API} from './swr/endpoint';

const postLogin = async (username?: string, password?: string) => {
  //console.log("username = " + username + " password = " + password);

  try {
    var data = JSON.stringify({
      username: username,
      password: password,
    });

    var config = {
      method: 'post',
      url: API.login,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
      timeout: 10000,
    };

    const res = await axios(config);
    // console.log("res = ", res.data);
    return res;
  } catch (error) {
    //console.log("Err = ", error);
    return error;
  }
};

export default postLogin;
