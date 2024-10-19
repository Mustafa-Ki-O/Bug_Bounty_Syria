import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: `${API_URL}`,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const companyData = localStorage.getItem("company");
    const companyToken = companyData
      ? JSON.parse(companyData).data.token
      : null;

    const researcherData = localStorage.getItem("researcher");
    const researcherToken = researcherData
      ? JSON.parse(researcherData).data.token
      : null;

    const auth = researcherToken
      ? `Bearer ${researcherToken}`
      : companyToken
      ? `Bearer ${companyToken}`
      : "";
    config.headers["Authorization"] = auth;
    return config;
  },
  (error) => Promise.reject(error)
);


export default axiosInstance;
