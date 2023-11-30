import axios from 'axios';

const API_URL = 'https://localhost:4001'; // Asegúrate de que la URL sea correcta

export default {
  getDonadores() {
    return axios.get(`${API_URL}/donadores`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error al obtener donadores:', error);
        return Promise.reject(error);
      });
  },

  addDonador(donador) {
    return axios.post(`${API_URL}/donadores`, donador);
  },

  editDonador(donador) {
    return axios.put(`${API_URL}/donadores/${donador.id}`, donador);
  },

  deleteDonador(id) {
    return axios.delete(`${API_URL}/donadores/${id}`);
  },
};
