import axiosInstance from '../axiosService'

const API_URL = import.meta.env.VITE_API_URL;

export function PostUpdateProfile(formData) {

  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/company/profile`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
