import axios from "axios";
import store from "../store/index";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API || "http://localhost:3000",
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers["Authorization"] = "Bearer " + store.getters.token;
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
    if (response.data.success === true) {
      return response.data;
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    // https://github.com/axios/axios#handling-errors
    if (error.response) {
      return Promise.reject(error.response.data);
    }
    console.log("Error", error.message);
    return Promise.reject(error);
  }
);

export default instance;
