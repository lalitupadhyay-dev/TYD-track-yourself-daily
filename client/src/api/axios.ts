import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// creating axios instance
const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  function onFulfilled(response) {
    return response.data;
  },
  function onRejected(error) {
    console.log("I am in interceptor - error");
    const normalizedError = {
      success: false,
      error: error.response?.data?.error,
      statusCode: error.response?.data?.statusCode,
    };

    return Promise.reject(normalizedError);
  }
);

export { api };
