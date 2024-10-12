import axiosInstance from '../axiosService'

const API_URL = import.meta.env.VITE_API_URL;

export function FetchProfile() {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/researcher/profile`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

