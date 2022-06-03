import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://test-api.piar.ee",
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
  
      if (token) {
        config.headers.authorization = token;
        //axios.defaults.headers.common['Authorization'] = token;
      }
  
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  export default axiosInstance;