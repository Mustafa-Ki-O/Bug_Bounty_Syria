import axiosInstance from '../../axiosService'

const API_URL = import.meta.env.VITE_API_URL;

export function PostValidOtp(formData) {
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/researcher/validateOtp`,formData)
      .then(response => {
        resolve(response.data);
        localStorage.setItem('uuid',response.data.data.uuid)
      })
      .catch(error => {
        reject(error);
      });
  });
};



