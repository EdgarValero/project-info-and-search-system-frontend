<template>
  <div class="products">
    <Navigation />
    <div class="row">
      <div class="col-12 col-md-3 col-lg-3 col-xl-2 p-3 bg-light mt-6">
        <div class="d-inline-block ml-2">
          <button
            class="btn btn-success d-md-none mb-2 ml-3 collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#NavDashboard"
            aria-controls="NavDashboard"
            aria-expanded="true"
            aria-label="Toggle Categories"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              role="img"
              focusable="false"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M4 7h22M4 15h22M4 23h22"
              ></path>
            </svg>
          </button>
        </div>
        <div class="d-inline-block ml-2 mt-3">
          <h4>
            <font-awesome-icon
              icon="list-alt"
              style="color: #007bff;"
            ></font-awesome-icon>
            Categorias
          </h4>
        </div>
        <nav class="bd-links collapse px-4" id="NavDashboard">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="" class="nav-link">Alimentos y Bebidas</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">Dulces y Snacks</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">Charcuteria</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">Cuidado Personal</a>
            </li>
          </ul>
        </nav>
      </div>
      <main class="col-12 col-md-9 col-lg-9 col-xl-10 ml-sm-auto px-4 pb-5">
        <!-- View Loading-->
        <div v-if="loading" style="margin:100px 0;">
          <h2
            class="display-1 d-flex justify-content-center align-items-center"
          >
            Estan cargando los Productos
          </h2>
        </div>
        <!--View Products-->
        <div v-else>
          <h2 class="h1 d-flex justify-content-center mt-7">Productos</h2>
          <div class="row mx-5">
            <div
              class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3"
              v-for="product in products"
              v-bind:key="product._id"
            >
              <div class="card shadow">
                <img
                  v-bind:src="`http://localhost:3000${product.imagePath}`"
                  class="img-fluid"
                />
                <div class="card-body">
                  <p>
                    <strong>{{ product.productDescription }}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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
      loading: true,
      products: []
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const products = await productController.getProducts();
      this.loading = false;
      this.products = products;
    }
  }
};
</script>
