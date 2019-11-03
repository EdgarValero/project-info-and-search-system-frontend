<template>
  <div class="home">
    <Navigation />
    <!--Carrousel Section-->
    <Carrousel />
    <!-- View Loading-->
    <div v-if="loading" class="my-5">
      <Loading />
    </div>
    <div v-else>
      <!--Products Featureds Section Glide-->
      <section class="mt-3 mb-2">
        <h3 class="h1 d-flex justify-content-center text-center px-3">
          Productos Destacados
        </h3>
        <hooper
          :itemsToShow="4"
          :infiniteScroll="true"
          class="slide-product-featured"
        >
          <slide
            class="mr-1 p-products-slide"
            v-for="productFeatured in productsFeatureds"
            :key="productFeatured._id"
          >
            <div
              class="card text-black mb-2"
              data-toggle="modal"
              data-target="#modalSingleProduct"
              @click="fillModalSingleProduct(productFeatured)"
            >
              <img
                :src="`http://localhost:3000${productFeatured.imagePath}`"
                class="img-fluid"
              />
              <div class="card-body d-none-product-slide">
                <p class="mb-1">
                  <strong>{{ productFeatured.productDescription }}</strong>
                </p>
                <div class="d-flex justify-content-end">
                  <button
                    type="button"
                    class="btn btn-primary text-white px-2 py-1"
                    style="border-radius: 50%;"
                  >
                    <font-awesome-icon icon="search" />
                  </button>
                </div>
              </div>
            </div>
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </section>
      <div class="row mx-0 px-3">
        <div class="col-12 col-lg-9">
          <!--Category section Section-->
          <section class="mt3- mb-2">
            <h3 class="h1 d-flex justify-content-center text-center px-3">
              Categorias de Productos
            </h3>
            <div class="row mx-4 d-flex justify-content-center">
              <div
                class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mt-2 px-1"
                v-for="category in categories"
                :key="category._id"
              >
                <router-link
                  :to="`${category.categoryUrl}`"
                  style="text-decoration: none;"
                  class="img-hover"
                >
                  <div class="card shadow">
                    <div
                      class="card-header bg-success text-center text-white d-md-none"
                    >
                      <h3>
                        {{ category.categoryName }}
                      </h3>
                    </div>
                    <img
                      :src="`http://localhost:3000${category.imagePath}`"
                      class="img-fluid"
                      style="height:250px;"
                    />
                    <div class="overlay">
                      <div class="text">{{ category.categoryName }}</div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </section>
        </div>
        <div class="col-lg-3 d-none-publicidad">
          <img
            src="../assets/img/publicidad-derecha1.jpg"
            class="img-fluid my-2"
          />
          <img
            src="../assets/img/publicidad-derecha2.jpg"
            class="img-fluid my-2"
          />
        </div>
      </div>
      <div class="col-12 p-1 p-md-3">
        <img src="../assets/img/publicidad-abajo.png" class="img-fluid" />
      </div>
    </div>
    <ModalSingleProduct :product="product" />
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import Carrousel from "@/components/Carrousel.vue";
import ModalSingleProduct from "@/components/ModalSingleProduct.vue";
import Loading from "@/components/Loading.vue";
import productController from "@/controllers/products.controller";
import categoryController from "@/controllers/categories.controller";

import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "home",
  components: {
    Navigation,
    Footer,
    Hooper,
    Slide,
    HooperNavigation,
    Carrousel,
    ModalSingleProduct,
    Loading
  },
  data() {
    return {
      loading: true,
      productsFeatureds: [],
      categories: [],
      // Prop ModalSingleProduct
      product: {}
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
    },
    fillModalSingleProduct(product) {
      this.product = product;
    }
  }
};
</script>
<style lang="scss">
.slide-product-featured {
  height: 100%;
}
.img-hover:hover .overlay {
  opacity: 1;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(40, 167, 69, 0.8);
}
.text {
  color: white;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.p-products-slide {
  @media screen and (min-width: 576px) {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  @media screen and (min-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  @media screen and (min-width: 992px) {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 4.5rem;
    padding-right: 4.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
.d-none-product-slide {
  @media screen and (max-width: 576px) {
    display: none;
  }
}
.d-none-publicidad {
  @media screen and (max-width: 992px) {
    display: none;
  }
}
</style>
