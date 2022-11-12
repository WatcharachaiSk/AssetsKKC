import {baseURL} from './config';
import axios from 'axios';
const httpClient = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient