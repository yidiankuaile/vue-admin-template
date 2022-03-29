import axios from "axios";
import { getToken } from "../utils/auth";
import store from "../store/index";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API || "http://localhost:3000",
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers["Authorization"] = "Bearer " + getToken();
    }

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // if (response.data.code === '444444') {
    //   router.replace('/login')
    // }
    if (response.data.success === true) {
      return response.data;
    } else {
      return Promise.reject(response.data);
    }
  },
  (error) => {
    console.warn("error: " + error);
    return Promise.reject(error);
  }
);

export default instance;
