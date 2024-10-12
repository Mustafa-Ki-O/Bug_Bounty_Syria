import axiosInstance from '../axiosService'

const API_URL = import.meta.env.VITE_API_URL;

export function SignIn(researcher){
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/researcher/login`,researcher)
      .then(response => {
        resolve(response.data);
        localStorage.setItem('researcher', JSON.stringify(response.data))
      })
      .catch(error => {
        reject(error);
      });
  });
};

