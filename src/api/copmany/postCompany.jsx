import axiosInstance from '../axiosService'

const API_URL = import.meta.env.VITE_API_URL;

const PostCompany = (company) => {
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/company/register`,company)
      .then(response => {
        resolve(response.data);
        localStorage.setItem("companyData", JSON.stringify(response.data));
      })
      .catch(error => {
        reject(error);
      });
  });
};
export default PostCompany


// export function postResearcher (researcher) {
//   return new Promise((resolve, reject) => {
//     axiosInstance.post(`${API_URL}/researcher/register`,researcher)
//       .then(response => {
//         resolve(response.data);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };

