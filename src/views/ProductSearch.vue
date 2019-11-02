<template>
  <div>
    <Navigation @searchInProductSearch="searchProduct" />
    <main class="px-4 my-5 container">
      <!-- View Loading -->
      <div v-if="loading" style="margin:100px 0;">
        <h2 class="display-3 d-flex justify-content-center align-items-center">
          Estan cargando los Productos...
        </h2>
      </div>
      <!-- View Products -->
      <div v-else>
        <div class="mt-resultado-busqueda border-bottom">
          <h2>RESULTADOS DE BÚSQUEDA: {{ searched }}</h2>
        </div>
        <div class="row mx-5 d-flex justify-content-center">
          <div v-if="msgProductNotFound.length">
            <div class="p-5">
              <p class="text-center lead">{{ msgProductNotFound }}</p>
            </div>
          </div>
          <div
            v-else
            class="col-12 col-md-6 col-lg-4 col-xl-3 mt-3"
            v-for="product in products"
            :key="product._id"
          >
            <div
              class="card shadow text-black"
              data-toggle="modal"
              data-target="#modalSingleProduct"
              @click="fillModalSingleProduct(product)"
            >
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
          </div>
        </div>
      </div>
    </main>
    <ModalSingleProduct :product="product" />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import ModalSingleProduct from "@/components/ModalSingleProduct.vue";

export default {
  components: {
    Navigation,
    ModalSingleProduct
  },
  data() {
    return {
      loading: true,
      products: [],
      searched: "",
      msgProductNotFound: "",
      // Prop ModalSingleProduct
      product: {}
    };
  },
  created() {
    this.searchProduct();
  },
  methods: {
    async searchProduct(search) {
      this.msgProductNotFound = "";
      this.products = [];
      const formData = new FormData();
      formData.append(
        "productSearch",
        this.$route.params.searchProduct || search
      );
      const response = await fetch(`http://localhost:3000/api/search`, {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.msg == "product_not_found") {
        this.msgProductNotFound =
          "No se ha encontrado ningún resultado. Actualmente la búsqueda no está disponible en nuestro inventario";
        this.searched = this.$route.params.searchProduct || search;
        this.loading = false;
      } else {
        this.searched = this.$route.params.searchProduct || search;
        this.products = data;
        this.loading = false;
      }
    },
    fillModalSingleProduct(product) {
      this.product = product;
    }
  }
};
</script>
<style lang="scss">
.mt-resultado-busqueda {
  margin-top: 7rem;
}
</style>
