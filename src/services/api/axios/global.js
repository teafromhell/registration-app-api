import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://test-api.piar.ee",
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const user = JSON.parse(localStorage.getItem("user"));
    
//     if (user) {
//       
//       axios.defaults.headers.common["user-jwt"] = user.token;
//     }
//     else {
//       axios.defaults.headers.common['user-jwt'] = null;
//   }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default axiosInstance;
