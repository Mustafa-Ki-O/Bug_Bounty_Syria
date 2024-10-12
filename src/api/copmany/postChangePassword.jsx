import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const postChangePassword = (password) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(`${API_URL}/company/changePassword`, password)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export default postChangePassword;
