<template>
  <v-container class="align-center">
    <v-responsive class="align-center text-center fill-height">
      <v-img height="600"  src="@/assets/financiamiento.jpg" />

      <div class="text-body-2 font-weight-light mb-n1">Bienvenido   </div>

      <h1 class="text-h2 font-weight-bold">Sistema de Donaciones y Donatorios</h1>

      <div class="py-14" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href=""
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-account-multiple-plus"
              size="large"
              start
            />

            Donadores
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            href=""
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
          >
            <v-icon
              icon="mdi-folder"
              size="large"
              start
            />

            Proyectos
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href=""
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-account-group"
              size="large"
              start
            />

            Donatorios
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
  //
</script>
