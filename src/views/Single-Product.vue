<template>
  <div class="single-product">
    <Navigation />
    <div class="row mx-1">
      <div class="col-12 col-md-4 mt-md-8 mb-5">
        <div class="m-atras text-primary cursor-pointer" onclick="history.back()">
          <font-awesome-icon icon="angle-left" style="font-size: 1rem;" />
          <strong class="ml-2">Atrás</strong>
        </div>
        <div class="d-flex justify-content-center">
          <img
            class="img-fluid"
            :src="`http://localhost:3000${product.imagePath}`"
          />
        </div>
        <p class="lead text-center">
          <strong
            >{{ product.productDescription }}
            <div v-if="product.disponibility === 'disponible'">
              <div class="badge badge-success badge-disponibility p-2">
                Disponible
              </div>
            </div>
            <div v-else-if="product.disponibility === 'poca disponibilidad'">
              <div
                class="badge badge-warning badge-disponibility p-2 text-white"
              >
                Poca Disponibilidad
              </div>
            </div>
            <div v-else-if="product.disponibility === 'no disponible'">
              <div class="badge badge-danger badge-disponibility p-2">
                No Disponible
              </div>
            </div>
          </strong>
        </p>
      </div>
      <div class="col-12 col-md-8 mt-md-9">
        <h2 class="d-flex justify-content-center text-center">
          Informacion sobre el producto
        </h2>
        <ul>
          <li>{{ product.productName }}</li>
          <li>{{ product.productCategory }}</li>
          <li>{{ product.productType }}</li>
          <li>{{ product.salePrice }}</li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import productController from "@/controllers/products.controller";

export default {
  name: "single-product",
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      product: {
        productName: "",
        productCategory: "",
        productType: "",
        productDescription: "",
        salePrice: "",
        disponibility: "",
        imagePath: ""
      }
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      const data = await productController.getProduct(this.$route.params.id);
      this.product.productName = data.productName;
      this.product.productCategory = data.productCategory;
      this.product.productType = data.productType;
      this.product.productDescription = data.productDescription;
      this.product.salePrice = data.salePrice;
      this.product.disponibility = data.disponibility;
      this.product.imagePath = data.imagePath;
    }
  }
};
</script>
<style lang="scss">
.mt-md-8 {
  margin-top: 4.5rem;
  @media screen and (min-width: 768px) {
    margin-top: 7rem;
  }
}
.mt-md-9 {
  @media screen and (min-width: 576px) {
    margin-top: 0;
  }
  @media screen and (min-width: 768px) {
    margin-top: 7rem;
  }
}
.m-atras{
  margin-top: 3rem;
  @media screen and (min-width: 768px) {
    margin-top: 1rem;
  }
}
</style>
