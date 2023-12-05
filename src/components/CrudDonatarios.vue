<template>
  <v-container>
    <v-card>
      <v-card-title>
        Donatarios
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

    <!-- Diálogo para Edición -->
    <v-dialog v-model="editDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Editar Registro</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Nombre"
                  v-model="editedItem.nombre"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="RFC"
                  v-model="editedItem.rfc"
                ></v-textarea>
              </v-col>
              <!-- Agrega más campos si es necesario -->
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeEdit">Cancelar</v-btn>
          <v-btn color="blue darken-1" text @click="saveEdit">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>


<script>
import { ref, onMounted } from 'vue';
import AuthService from '../DonatariosService.js';
import ProyectosService from '../AuthService.js';


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
    const proyectos = ref([]);
    const donatarios = ref([]);
    const items = ref([]);
    const editDialog = ref(false);
    const editedItem = ref({});
    const headers = ref([
      { text: 'ID', value: 'id' },
      { text: 'Nombre', value: 'nombre' },
      { text: 'rfc', value: 'rfc' },
      { text: 'Acciones', value: 'actions', sortable: false }
    ]);



    onMounted(async () => {
      try {
        proyectos.value = await ProyectosService.getRegistrosProyectos(); // Carga los proyectos
        items.value = await AuthService.getDonatarios(); // Asegúrate de que esto devuelve un array
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    });

    function cargarRegistros() {
      AuthService.getDonatarios()
        .then(data => {
          items.value = data;
        })
        .catch(error => {
          console.error('Error al cargar registros:', error);
          // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
        });
    }

    function addItem(newItem) {
      AuthService.addDonatario(newItem)
        .then(() => cargarRegistros())
        .catch(error => console.error('Error al agregar:', error));
    }
    function deleteItem(item) {
      AuthService.deleteDonatario(item.id)
        .then(() => cargarRegistros())
        .catch(error => console.error('Error al eliminar:', error));
    }

    function editItem(item) {
      editedItem.value = { ...item }; // Copia el item a editar
      editDialog.value = true; // Abre el diálogo
    }

    function closeEdit() {
      editDialog.value = false;
    }

    function saveEdit() {
      AuthService.editDonatario(editedItem.value)
        .then(() => {
          cargarRegistros();
          closeEdit();
        })
        .catch(error => {
          console.error('Error al editar:', error);
        });
    }


    return { headers, items, editDialog, editedItem, addItem, editItem, deleteItem, closeEdit, saveEdit };
  }
};
</script>
