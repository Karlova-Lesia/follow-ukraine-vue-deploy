import axios from 'axios';

const instance = axios.create({
  // baseURL: import.meta.env.VITE_APP_API_URL,
  baseURL: "https://json-server.herokuapp.com",
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default instance;
