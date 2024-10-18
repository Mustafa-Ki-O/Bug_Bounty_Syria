import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

export const errors = null;

export function fetchDataCompanyProfile() {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(`${API_URL}/company/profile`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
