import axiosInstance from '../axiosService'

const API_URL = import.meta.env.VITE_API_URL;

export function PostBug(formData) {

  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/researcher/add-reports-researcher`,formData)

      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};


