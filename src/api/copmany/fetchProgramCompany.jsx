import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const fetchProgramCompany = (activePage) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(`${API_URL}/company/all_product?page=${activePage}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export default fetchProgramCompany;
