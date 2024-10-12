import axiosInstance from '../axiosService'

const API_URL = import.meta.env.VITE_API_URL;

export function FetchHome({searchTerm, unavailability,availability, oldPro, newPro}) {
 
 const params = new URLSearchParams();
 if(searchTerm !== undefined) params.append('name',searchTerm);
 if(unavailability !== undefined) params.append('unavailability',unavailability);
 if(availability !== undefined) params.append('availability',availability);
 if(oldPro !== undefined) params.append('old',oldPro);
 if(newPro !== undefined) params.append('new',newPro);

  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/researcher/home?${params}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

