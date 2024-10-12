import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

export function SignInCompany(company) {
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/company/login`, company)
      .then((response) => {
        resolve(response.data);
        localStorage.setItem('company',JSON.stringify(response.data))
      })
      .catch((error) => {
        reject(error);
      });
  });
}
