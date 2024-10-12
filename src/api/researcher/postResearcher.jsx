import axiosInstance from '../axiosService'

const API_URL = import.meta.env.VITE_API_URL;

export function PostResearcher(researcher) {
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/researcher/register`,researcher)
      .then(response => {
        resolve(response.data);
        localStorage.setItem('researcherData',JSON.stringify(response.data));
      })
      .catch(error => {
        reject(error);
      });
  });
};

