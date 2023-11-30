<template>
      <v-navigation-drawer
        expand-on-hover
        rail
        width="300"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            title="Sistema de Donaciones"
            subtitle="Impulsando Proyectos"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item @click="navigate('Donatarios')" prepend-icon="mdi-account-group" title="Donatarios"></v-list-item>
          <v-list-item @click="navigate('Donadores')" prepend-icon="mdi-account-multiple-plus" title="Donadores" value="shared"></v-list-item>
          <v-list-item @click="navigate('Proyectos')" prepend-icon="mdi-folder" title="Proyectos" value="starred"></v-list-item>
          <v-list-item @click="navigate('Home')" prepend-icon="mdi-home" title="Pagina Principal" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 350px"></v-main>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Ejemplo de función para navegar
function navigate(routeName) {
  router.push({ name: routeName })
}
</script>
