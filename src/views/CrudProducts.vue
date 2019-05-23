<template>
  <div class="crud-product">
    <Navigation />

    <div class="row mx-2">
      <div class="col-12 col-md-4 px-4 py-3">
        <div class="card">
          <div class="card-header bg-primary text-white text-center">
            <h3>Add Product</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="addProduct">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Product Name"
                  v-model="product.productName"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Product Category"
                  v-model="product.productCategory"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Product Sale Price"
                  v-model="product.salePrice"
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  placeholder="Product Description"
                  v-model="product.productDescription"
                >
                </textarea>
              </div>
              <div class="input-group">
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="img"
                    aria-describedby="inputGroupFileAddon01"
                    @change="onFileImg"
                  />
                  <label class="custom-file-label" for="inputGroupFile01"
                    >Choose Image</label
                  >
                </div>
              </div>
              <div class="form-group mt-2">
                <button type="submit" class="btn btn-primary btn-block">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 px-4 py-3 table-responsive">
        <table class="table table-bordered">
          <thead class="bg-primary text-center text-white">
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Sale Price</th>
              <th scope="col">Product Description</th>
              <th scope="col">Url Img</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" v-bind:key="product.id">
              <th scope="row">{{ product._id }}</th>
              <td>{{ product.productName }}</td>
              <td>{{ product.productCategory }}</td>
              <td>{{ product.salePrice }}</td>
              <td>{{ product.productDescription }}</td>
              <td>{{ product.imagePath }}</td>
              <td class="p-2">
                <button
                  type="button"
                  class="btn btn-danger mt-1"
                  @click="deleteProduct(product._id)"
                >
                  Delete
                </button>
                <button type="button" class="btn btn-success mt-1">
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import productController from "../controllers/products.controller";

class Product {
  constructor(productName, productCategory, productDescription, salePrice) {
    this.imgPath = this.imgPath;
    this.productName = productName;
    this.productCategory = productCategory;
    this.productDescription = productDescription;
    this.salePrice = salePrice;
  }
}

export default {
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      product: {
        productName: "",
        productCategory: "",
        productDescription: "",
        salePrice: "",
        imgPath: null
      },
      products: [],
      image: null
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const products = await productController.getProducts();
      this.products = products;
    },
    async addProduct() {
      const fd = new FormData();
      fd.append("productName", this.product.productName);
      fd.append("productCategory", this.product.productCategory);
      fd.append("productDescription", this.product.productDescription);
      fd.append("salePrice", this.product.salePrice);
      fd.append("image", this.product.image);

      await productController.addProduct(fd);
      this.getProducts();
      this.product = new Product();
    },
    async deleteProduct(id) {
      await productController.deleteProduct(id);
      this.getProducts();
    },
    async onFileImg(event) {
      this.product.image = event.target.files[0];
    }
  }
};
</script>
