import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const fetchProgramCompany = () => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(`${API_URL}/company/all_product`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export default fetchProgramCompany;
