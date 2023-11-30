<template>
  <CrudProyectos />
  <barra-lateral></barra-lateral>

</template>

<script>
import CrudProyectos from '@/components/CrudProyectos.vue';
import BarraLateral from "@/components/BarraLateral.vue"; // Asegúrate de que la ruta sea correcta

export default {
  components: {
    BarraLateral,
    CrudProyectos
  }
}
</script>
