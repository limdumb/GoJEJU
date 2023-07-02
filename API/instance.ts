import { API_URL } from '@env';
import axios from 'axios';

export const baseInstance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});