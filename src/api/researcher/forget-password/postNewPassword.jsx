import axiosInstance from '../../axiosService'

const API_URL = import.meta.env.VITE_API_URL;

export function PostNewPassword(formData) {
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/researcher/resetPassword`,formData)
      .then(response => {
        resolve(response.data);
        localStorage.removeItem('email');
        localStorage.removeItem('uuid');
      })
      .catch(error => {
        reject(error);
      });
  });
};


