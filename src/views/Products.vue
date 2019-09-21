<template>
  <div class="products">
    <Navigation />
    <!--Carrousel Section-->
    <Carrousel />
    <!--Section Products-->
    <div class="row mx-0">
      <div class="col-12 col-md-3 col-lg-3 col-xl-2 p-3 bg-light">
        <div class="d-inline-block ml-1">
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
            Categorias
          </h4>
        </div>
        <nav class="bd-links collapse px-4" id="NavDashboard">
          <ul
            class="navbar-nav"
            v-for="category in categories"
            :key="category._id"
          >
            <li class="nav-item">
              <router-link :to="`${category.categoryUrl}`" class="nav-link">{{
                category.categoryName
              }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <main class="col-12 col-md-9 col-lg-9 col-xl-10 ml-sm-auto">
        <!-- View Loading-->
        <div v-if="loading" style="margin:100px 0;">
          <h2
            class="display-3 d-flex justify-content-center align-items-center"
          >
            Estan cargando los Productos...
          </h2>
        </div>
        <!--View Products-->
        <div v-else>
          <h2 class="h1 d-flex justify-content-center mt-3 text-center px-3">
            Todos los Productos
          </h2>
          <div class="row mx-5 d-flex justify-content-center">
            <div
              class="col-12 col-sm-4 col-md-6 col-lg-4 col-xl-3 mt-3"
              v-for="product in displayedProducts"
              :key="product._id"
            >
              <router-link
                :to="`/producto/${product._id}`"
                style="text-decoration: none"
              >
                <div class="card shadow text-black">
                  <img
                    :src="`http://localhost:3000${product.imagePath}`"
                    class="img-fluid"
                  />
                  <div class="card-body">
                    <p class="mb-1">
                      <strong>{{ product.productDescription }}</strong>
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
              </router-link>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="btn-group col-md-2 mx-auto">
            <button
              type="button"
              class="btn btn-primary button-pagination"
              v-if="page != 1"
              @click="page--"
            >
              <font-awesome-icon icon="angle-left" />
            </button>
            <button
              type="button"
              class="btn btn-outline-success button-pagination"
              v-for="pageNumber in pages.slice(page - 1, page + 4)"
              :key="pageNumber"
              @click="page = pageNumber"
            >
              {{ pageNumber }}
            </button>
            <button
              type="button"
              class="btn btn-primary button-pagination"
              v-if="page < pages.length"
              @click="page++"
            >
              <font-awesome-icon icon="angle-right" />
            </button>
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
import Carrousel from "@/components/Carrousel.vue";
import productController from "@/controllers/products.controller";
import categoryController from "@/controllers/categories.controller";

export default {
  components: {
    Navigation,
    Footer,
    Carrousel
  },
  data() {
    return {
      loading: true,
      products: [],
      page: 1,
      perPage: 12,
      pages: [],
      categories: []
    };
  },
  created() {
    this.getProducts();
    this.getCategories();
  },
  methods: {
    async getProducts() {
      const products = await productController.getProducts();
      this.loading = false;
      this.products = products;
    },
    async getCategories() {
      const categories = await categoryController.getCategories();
      this.categories = categories;
      this.loading = false;
    },
    pagination(products) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return products.slice(from, to);
    },
    setProducts() {
      let numberOfPages = Math.ceil(this.products.length / this.perPage);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pages.push(i);
      }
    }
  },
  computed: {
    displayedProducts() {
      return this.pagination(this.products);
    }
  },
  watch: {
    products() {
      this.setProducts();
    }
  }
};
</script>
