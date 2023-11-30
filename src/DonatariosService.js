import axios from 'axios';

const API_URL = 'https://localhost:4001'; // Asegúrate de que la URL sea correcta

export default {
  getDonatarios() {
    return axios.get(`${API_URL}/donatarios`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error al obtener donatarios:', error);
        return Promise.reject(error);
      });
  },

  addDonatario(donatario) {
    return axios.post(`${API_URL}/donatarios`, donatario);
  },

  editDonatario(donatario) {
    return axios.put(`${API_URL}/donatarios/${donatario.id}`, donatario);
  },

  deleteDonatario(id) {
    return axios.delete(`${API_URL}/donatarios/${id}`);
  },
};
