<template>
  <div>
    <Navigation />
    <h1 class="display-1 mt-5">Productos buscados</h1>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Navigation
  },
  data() {
    return {
      products: []
    };
  },
  created() {
    this.searchProduct();
  },
  methods: {
    async searchProduct() {
      const formData = new FormData();
      formData.append("productSearch", this.$route.params.searchProduct);
      const response = await fetch(`http://localhost:3000/api/search`, {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      console.log(data);
    }
  }
};
</script>
