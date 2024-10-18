import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

export function fetchReports() {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(`${API_URL}/company/all_report?page=1`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
