import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

export function PostCode(code, token) {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`${API_URL}/researcher/register/${token}`, code)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
