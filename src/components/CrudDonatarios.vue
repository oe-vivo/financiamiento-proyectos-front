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
          <!-- Definimos el slot para los botones de acciones para cada fila -->
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
import { ref } from 'vue';
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
      { text: 'Acciones', value: 'actions', sortable: false }
    ]);

    const items = ref([
      { id: 1, name: 'Elemento 1' },
      { id: 2, name: 'Elemento 2' },
      // Agrega más elementos ficticios según sea necesario
    ]);

    // Función para agregar un nuevo item (ficticio para ejemplo)
    const addItem = () => {
      const newId = items.value.length + 1;
      items.value.push({ id: newId, name: `Elemento ${newId}` });
    };

    // Función para editar un item (solo log para este ejemplo)
    const editItem = (item) => {
      console.log('Editar item', item);
      // Aquí iría la lógica de edición
    };

    // Función para eliminar un item
    const deleteItem = (item) => {
      const index = items.value.findIndex(i => i.id === item.id);
      if (index > -1) {
        items.value.splice(index, 1);
      }
    };

    return { headers, items, addItem, editItem, deleteItem };
  }
}
</script>
