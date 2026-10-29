import axios from 'axios';

export const API_URL = "https://zosh-bazaar-backend-1.onrender.com";
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});