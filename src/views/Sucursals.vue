<template>
  <div class="sucursals">
    <Navigation />
    <div
      class="bg-primary text-white mb-4 mt-8 py-1"
      style="border-top: solid 5px #28a745; border-bottom: solid 5px #28a745;"
    >
      <h2 class="h1 px-3 mx-3">
        Sucursales
      </h2>
    </div>
    <div class="row mx-1 mb-5" v-for="sucursal in sucursals" :key="sucursal">
      <div class="col-12 col-md-4">
        <ul>
          <li>Dirrecion: {{ sucursal.direction }}</li>
          <li>Telefono: {{ sucursal.numberContact }}</li>
        </ul>
      </div>
      <div class="col-12 col-md-8">
        <div v-html="`${sucursal.googleMaps}`"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import sucursalController from "../controllers/sucursals.controller";

export default {
  name: "sucursals",
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      sucursals: []
    };
  },
  created() {
    this.getSucursals();
  },
  methods: {
    async getSucursals() {
      const sucursals = await sucursalController.getSucursals();
      this.sucursals = sucursals;
    }
  }
};
</script>
