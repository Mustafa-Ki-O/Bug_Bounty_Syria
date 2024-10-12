import axiosInstance from '../axiosService'

const API_URL = import.meta.env.VITE_API_URL;

export function PostProfile(formData) {

  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/researcher/profile`,formData)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};


