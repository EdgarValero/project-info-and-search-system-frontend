<template>
  <div class="sucursals">
    <Navigation />
    <div class="text-white mb-5 mt-banner">
      <img src="../assets/img/banner-sucursales.jpg" class="img-fluid" />
    </div>
    <div
      class="row mx-2 px-2 mb-5 d-flex justify-content-center"
      v-for="sucursal in sucursals"
      :key="sucursal"
    >
      <div class="col-12 col-md-6">
        <div class="info-sucursal">
          <font-awesome-icon icon="map-marker-alt" /> {{ sucursal.address }}.
        </div>
        <div class="info-sucursal">
          <font-awesome-icon icon="clock" /> {{ sucursal.officeHours }}.
        </div>
        <div class="info-sucursal">
          <font-awesome-icon icon="phone" /> {{ sucursal.numberContact }}.
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div v-html="`${sucursal.googleMaps}`"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import sucursalController from "@/controllers/sucursals.controller";

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
<style lang="scss">
.info-sucursal {
  font-size: 1.2rem;
  padding: 0.5rem;
}

.mt-banner {
  margin-top: 6.2rem;
}
</style>
