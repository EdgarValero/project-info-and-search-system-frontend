<template>
  <div class="home">
    <Navigation />
    <!--Carrousel Section-->
    <section class="container-fluid px-0 mt-6">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/img/banner-1.jpg"
              class="d-block w-100"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/banner-2.jpg"
              class="d-block w-100"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/banner-3.jpg"
              class="d-block w-100"
              alt=""
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/banner-4.jpg"
              class="d-block w-100"
              alt=""
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
    <!-- View Loading-->
    <div v-if="loading" class="my-5">
      <h2 class="display-3 d-flex justify-content-center align-items-center">
        Esta cargando la informacion...
      </h2>
    </div>
    <div v-else>
      <!--Products Featureds Section Glide-->
      <section class="mt-3 mb-2">
        <h3 class="h1 d-flex justify-content-center">Productos Destacados</h3>
        <hooper :itemsToShow="3.5" :infiniteScroll="true">
          <slide
            class="mr-1"
            v-for="productFeatured in productsFeatureds"
            v-bind:key="productFeatured._id"
          >
            <router-link to="/products">
              <img
                v-bind:src="`http://localhost:3000${productFeatured.imagePath}`"
                class="img-fluid"
                style="height:200px;"
              />
            </router-link>
            <img
              v-bind:src="`http://localhost:3000${productFeatured.imagePath}`"
              class="img-fluid"
              style="height:200px;"
            />
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </section>
      <!--Category section Section-->
      <section class="mt3- mb-2">
        <h3 class="h1 d-flex justify-content-center">
          Categorias de Productos
        </h3>
        <div class="row mx-4">
          <div
            class="col-12 col-md-6 col-lg-4 col-xl-3 mt-2"
            v-for="category in categories"
            v-bind:key="category._id"
          >
            <div class="card shadow">
              <div class="card-header bg-primary text-center text-white">
                <h3>{{ category.categoryName }}</h3>
              </div>
              <img
                v-bind:src="`http://localhost:3000${category.imagePath}`"
                class="img-fluid"
                style="height:250px;"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import productController from "../controllers/products.controller";
import categoryController from "../controllers/categories.controller";

import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "home",
  components: {
    Navigation,
    Footer,
    Hooper,
    Slide,
    HooperNavigation
  },
  data() {
    return {
      loading: true,
      productsFeatureds: [],
      categories: []
    };
  },
  created() {
    this.getProductsFeatureds();
    this.getCategories();
  },
  methods: {
    async getProductsFeatureds() {
      const productsFeatureds = await productController.getProductsFeatureds();
      this.loading = false;
      this.productsFeatureds = productsFeatureds;
    },
    async getCategories() {
      const categories = await categoryController.getCategories();
      this.loading = false;
      this.categories = categories;
    }
  }
};
</script>
