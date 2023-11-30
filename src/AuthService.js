import axios from 'axios';

const API_URL = 'https://localhost:4001'; // Asegúrate de que la URL sea correcta

export default {
  // Función para iniciar sesión
  login(credentials) {
    return axios.post(`${API_URL}/usuarios/login`, credentials)
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch(error => {
        console.error('Error en la solicitud al backend:', error.response.data);
        return Promise.reject(error.response.data);
      });
  },

  // Función para cerrar sesión
  logout() {
    localStorage.removeItem('user');
  },

  // Función para obtener el usuario actual
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  },

  // Función para obtener registros para la tabla CRUD
  getRegistrosProyectos() {
    return axios.get(`${API_URL}/proyectos`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error('Error al obtener registros:', error);
        return Promise.reject(error);
      });
  },
  addProyecto(proyecto) {
    return axios.post(`${API_URL}/proyectos`, proyecto);
  },

  editProyecto(proyecto) {
    return axios.put(`${API_URL}/proyectos/${proyecto.id}`, proyecto);
  },

  deleteProyecto(id) {
    return axios.delete(`${API_URL}/proyectos/${id}`);
  },

  // Aquí puedes agregar más funciones según sea necesario

};
