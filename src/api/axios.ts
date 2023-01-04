import axios from 'axios';
// import * as http from "http";

const instance = axios.create({
  // baseURL: import.meta.env.VITE_APP_API_URL,
  baseURL: "https://follow-ukraine-vue.herokuapp.com",
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default instance;
