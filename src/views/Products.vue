<template>
  <div class="products">
    <Navigation />
    <h2 class="h1 d-flex justify-content-center mt-6">Productos</h2>
    <div class="row mx-5">
      <div
        class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3"
        v-for="product in products"
        v-bind:key="product._id"
      >
        <div class="card shadow">
          <div class="card-header bg-primary text-center text-white">
            <h3>{{ product.productName }}</h3>
          </div>
          <div class="card-body">
            <div>
              <img
                v-bind:src="`http://localhost:3000${product.imagePath}`"
                class="img-fluid"
              />
            </div>
            <p>
              <strong>{{ product.productDescription }}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import productController from "../controllers/products.controller";

export default {
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      products: []
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const products = await productController.getProducts();
      this.products = products;
    }
  }
};
</script>
