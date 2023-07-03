import axios from 'axios';

export const baseInstance = axios.create({
  baseURL: "http://13.125.122.137:8080",
  timeout: 1000,
});