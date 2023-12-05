<template>
  <v-container>
    <v-card>
      <v-card-title>
        Donadores
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
    <!-- Diálogo para Edición -->
    <v-dialog v-model="editDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Editar Donador</span>
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
                <v-text-field
                  label="RFC"
                  v-model="editedItem.rfc"
                ></v-text-field>
              </v-col>
              <!-- Menú desplegable para seleccionar el proyecto -->
              <v-col cols="12">
                <v-select
                  :items="proyectos"
                  item-text="nombre"
                item-value="id"
                v-model="editedItem.proyectoId"
                label="Seleccionar Proyecto">
                </v-select>
              </v-col>
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
import AuthService from '../DonadoresService.js'; // Asegúrate de que la ruta sea correcta
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
    const items = ref([]);
    const editDialog = ref(false);
    const editedItem = ref({});

    const headers = ref([
      { text: 'ID', value: 'id' },
      { text: 'Nombre', value: 'nombre' },
      { text: 'RFC', value: 'rfc' },  // Asegúrate de que 'rfc' sea la propiedad correcta
      { text: 'Acciones', value: 'actions', sortable: false }
    ]);

    const cargarRegistros = async () => {
      try {
        const response = await AuthService.getDonadores();
        if (response && response.length > 0) {
          items.value = response; // Asumiendo que la respuesta ya es el array de datos
        } else {
          console.log('No se recibieron datos de donadores');
        }
      } catch (error) {
        console.error('Error al cargar registros:', error);
      }
    };

    onMounted(async () => {
      try {
        const response = await ProyectosService.getRegistrosProyectos();
        proyectos.value = response.data;
        await cargarRegistros(); // Ahora sí puedes usar await aquí
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    });


    function addItem(newItem) {
      AuthService.addDonador(newItem)
        .then(() => cargarRegistros())
        .catch(error => console.error('Error al agregar:', error));
    }
    function deleteItem(item) {
      AuthService.deleteDonador(item.id)
        .then(() => cargarRegistros())
        .catch(error => console.error('Error al eliminar:', error));
    }

    function editItem(item) {
      editedItem.value = { id: item.id, nombre: item.nombre, rfc: item.rfc }; // Ajusta según la estructura de tus datos
      editDialog.value = true;
    }

    function closeEdit() {
      editDialog.value = false;
    }

    function saveEdit() {
      AuthService.editDonador(editedItem.value)
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
