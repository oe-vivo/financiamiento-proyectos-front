<template>

  <donatarios-crud></donatarios-crud>
  <barra-lateral></barra-lateral>
</template>

<script>
import DonatariosCrud from "@/components/CrudDonatarios.vue";
import BarraLateral from "@/components/BarraLateral.vue"; // Asegúrate de que la ruta sea correcta

export default {
  components: {
    BarraLateral,
    DonatariosCrud
  }
}
</script>
