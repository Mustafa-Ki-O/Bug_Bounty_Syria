import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const addProduct = (product) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`${API_URL}/company/add_product`, product)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export default addProduct;
