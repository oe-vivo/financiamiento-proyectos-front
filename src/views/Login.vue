<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12 login-card" data-aos="fade-up" data-aos-duration="1000">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="login">
              <v-text-field
                label="Usuario"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                v-model="username"
              ></v-text-field>
              <v-text-field
                id="password"
                label="Contraseña"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" class="animated-button" @click="login">Ingresar</v-btn>
            <!-- Botón de Inicio de Sesión con Google -->
            <v-btn color="red" @click="handleLoginWithGoogle">Iniciar Sesión con Google</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import AuthService from '../AuthService.js';
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log('Enviando credenciales al backend:', this.username, this.password);
      AuthService.login({
        username: this.username,
        password: this.password,
      })
        .then(response => {
          console.log('Respuesta del backend:', response);
          console.log('Inicio de sesión exitoso:', response);

          // Redirige a la ruta '/home'
          this.$router.push('/home');
        })
        .catch(error => {
          console.error('Error al iniciar sesión:', error);
          // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
          alert("Credenciales no válidas");
        });
    },
    async handleLoginWithGoogle() {
      try {
        const auth2 = gapi.auth2.getAuthInstance();
        const googleUser = await auth2.signIn();
        const idToken = googleUser.getAuthResponse().id_token;

        // Envía el idToken a tu backend
        const response = await axios.post('http://localhost:3000/api/auth/google', { token: idToken });
        const { token } = response.data;

        // Manejo de la respuesta
        // Por ejemplo, guardar el JWT en localStorage y actualizar el estado de autenticación
        localStorage.setItem('jwt', token);
        this.$router.push('/home'); // Redirige al usuario a una ruta después del login
      } catch (error) {
        console.error('Error al iniciar sesión con Google:', error);
      }
    }
  },
  mounted() {
    // Asegúrate de que el SDK de Google esté cargado y listo
    window.gapi.load('auth2', function() {
      window.gapi.auth2.init();
    });
  }

};
</script>


<style>
/* Animación para el botón */
.animated-button:hover {
  transition: all 0.2s ease-in-out;
  transform: scale(1.1);
}

/* Estilo para el card de login con fondo oscuro */
.login-card {
  background-color: #424242; /* Puedes ajustar el color a tu preferencia */
}
</style>
