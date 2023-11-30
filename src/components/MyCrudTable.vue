<template>
  <v-container>
    <v-card>
      <v-card-title>
        CRUD Table
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="addItem">Agregar</v-btn>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="items"
          class="elevation-1"
        >
          <!-- Slot para los botones de acciones para cada fila -->
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn icon @click="editItem(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon color="red" @click="deleteItem(item)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';
import AuthService from '../AuthService.js'; // Asegúrate de que la ruta sea correcta
import {
  VContainer,
  VCard,
  VCardTitle,
  VCardText,
  VDataTable,
  VIcon,
  VBtn,
  VSpacer
} from 'vuetify/components';

export default {
  components: {
    VContainer,
    VCard,
    VCardTitle,
    VCardText,
    VDataTable,
    VIcon,
    VBtn,
    VSpacer
  },
  setup() {
    const headers = ref([
      { text: 'ID', value: 'id' },
      { text: 'Nombre', value: 'name' },
      { text: 'Descripcion', value: 'desc', sortable: false }
    ]);

    const items = ref([]);

    // Carga los registros desde la API al montar el componente
    onMounted(() => {
      getRegistrosProyectos();
    });

    const cargarRegistros = () => {
      AuthService.getRegistrosProyectos()
        .then(data => {
          items.value = data;
        })
        .catch(error => {
          console.error('Error al cargar registros:', error);
        });
    };

    const addItem = () => {
      // Lógica para agregar un nuevo ítem
    };

    const editItem = (item) => {
      // Lógica para editar un ítem
    };

    const deleteItem = (item) => {
      // Lógica para eliminar un ítem
    };

    return { headers, items, addItem, editItem, deleteItem };
  }
};
</script>
