<template>
  <v-container class="align-center">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="600"  src="@/assets/financiamiento.jpg" />

      <div class="text-body-2 font-weight-light mb-n1">Bienvenido   </div>

      <h1 class="text-h2 font-weight-bold">Sistema de Donaciones y Donatorios</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <router-link to="/donadores" tag="v-btn" min-width="164" rel="noopener noreferrer"  variant="text">
            <v-icon icon="mdi-account-group" size="large" start />
            Donadores
          </router-link>
        </v-col>

        <v-col cols="auto">
          <router-link to="/proyectos" tag="v-btn" min-width="164" rel="noopener noreferrer"  variant="text">
            <v-icon icon="mdi-account-group" size="large" start />
            Proyectos
          </router-link>
        </v-col>

        <v-col cols="auto">
          <router-link to="/donatarios" tag="v-btn" min-width="164" rel="noopener noreferrer"  variant="text">
            <v-icon icon="mdi-account-group" size="large" start />
            Donatarios
          </router-link>
        </v-col>


      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  //
</script>
