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
    <!--Product Section-->
    <section class="mt-3 mb-2">
      <h3 class="h1 d-flex justify-content-center">Productos Destacados</h3>
      <div class="row mx-4">
        <div
          class="col-12 col-md-6 col-lg-4 col-xl-3 mt-2"
          v-for="productFeatured in productsFeatureds"
          v-bind:key="productFeatured._id"
        >
          <div class="card shadow">
            <div class="card-header bg-primary text-center text-white">
              <h3>{{ productFeatured.productName }}</h3>
            </div>
            <img
              v-bind:src="`http://localhost:3000${productFeatured.imagePath}`"
              class="img-fluid"
            />
            <div class="card-body">
              <p>
                Categoria del Producto:
                <strong>{{ productFeatured.productCategory }}</strong>
              </p>
              <p>
                Precio de Venta:
                <strong>{{ productFeatured.salePrice }}</strong>
              </p>
              <p>
                Description del Producto:
                <strong>{{ productFeatured.productDescription }}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Category section Section-->
    <section class="mt3- mb-2">
      <h3 class="h1 d-flex justify-content-center">Categorias de Productos</h3>
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
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import productController from "../controllers/products.controller";
import categoryController from "../controllers/categories.controller";

export default {
  name: "home",
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
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
      this.productsFeatureds = productsFeatureds;
    },
    async getCategories() {
      const categories = await categoryController.getCategories();
      this.categories = categories;
    }
  }
};
</script>
