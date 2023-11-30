import axios from 'axios';

const API_URL = 'https://localhost:4001'; // Asegúrate de que la URL sea correcta

export default {
  getDonatarios() {
    return axios.get(`${API_URL}/donatorio`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error al obtener donatarios:', error);
        return Promise.reject(error);
      });
  },

  addDonatario(donatario) {
    return axios.post(`${API_URL}/donatorio`, donatario);
  },

  editDonatario(donatario) {
    return axios.put(`${API_URL}/donatorio/${donatario.id}`, donatario);
  },

  deleteDonatario(id) {
    return axios.delete(`${API_URL}/donatorio/${id}`);
  },
};
