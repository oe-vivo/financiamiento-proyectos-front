<template>
  <barra-lateral></barra-lateral>
  <MyCrudTable />

</template>

<script>
import MyCrudTable from '@/components/CrudDonadores.vue';
import BarraLateral from "@/components/BarraLateral.vue"; // Asegúrate de que la ruta sea correcta

export default {
  components: {
    BarraLateral,
    MyCrudTable
  }
}
</script>
