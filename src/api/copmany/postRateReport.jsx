import axiosInstance from '../axiosService';

const API_URL = import.meta.env.VITE_API_URL;

const PostRateReport = (uuid, rate) => {
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/company/all_report/rate/${uuid}`, rate)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default PostRateReport;