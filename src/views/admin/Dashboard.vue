<template>
  <div class="dashboard">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-3 col-lg-3 col-xl-2 p-3 bg-light">
          <div class="d-inline-block">
            <button
              class="btn btn-dark d-md-none mb-2 collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#NavDashboard"
              aria-controls="NavDashboard"
              aria-expanded="true"
              aria-label=""
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
          <div class="d-inline-flex ml-3">
            <font-awesome-icon icon="tachometer-alt" style="font-size:25px;" />
            <h4>Admin</h4>
            <strong>Dashboard</strong>
          </div>
          <nav class="bd-links collapse p-3" id="NavDashboard">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="btn btn-primary btn-block text-white cursor-pointer"
                  @click="showProductOptions"
                  >Products <font-awesome-icon icon="angle-down"
                /></a>
                <transition name="slide-down">
                  <div v-if="productOptions">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a
                          class="nav-link text-center cursor-pointer"
                          @click="showFormAddProduct"
                          >Add Product <font-awesome-icon icon="plus"
                        /></a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link text-center cursor-pointer"
                          @click="showTableProducts"
                          >All Products <font-awesome-icon icon="list-alt"
                        /></a>
                      </li>
                    </ul>
                  </div>
                </transition>
              </li>
              <li class="nav-item mt-2">
                <a
                  class="btn btn-primary btn-block text-white cursor-pointer"
                  @click="showCategoryOptions"
                  >Products Categories <font-awesome-icon icon="angle-down"
                /></a>
                <transition name="slide-down">
                  <div v-if="categoryOptions">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a
                          class="nav-link text-center cursor-pointer"
                          @click="showFormAddCategory"
                          >Add Category <font-awesome-icon icon="plus"
                        /></a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link text-center cursor-pointer"
                          @click="showTableCategory"
                          >All Categories <font-awesome-icon icon="list-alt"
                        /></a>
                      </li>
                    </ul>
                  </div>
                </transition>
              </li>
            </ul>
          </nav>
        </div>
        <main
          role="main"
          class="col-12 col-md-9 col-lg-9 col-xl-10 ml-sm-auto px-4 pb-5"
        >
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          >
            <h1 class="h2">
              <font-awesome-icon
                icon="tachometer-alt"
                style="font-size:30px;"
              />
              Dashboard
            </h1>
          </div>
          <!--FORM ADD PRODUCT-->
          <transition name="slide-fade">
            <div v-if="varShowFormAddProduct">
              <div class="row">
                <div class="col-12 col-md-10 col-lg-6 px-4 py-3 mx-auto">
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
                            class="form-control textarea-form-admin"
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
                            <label
                              class="custom-file-label"
                              for="inputGroupFile01"
                              >Choose Image</label
                            >
                          </div>
                        </div>
                        <div class="form-group mt-2">
                          <button
                            type="submit"
                            class="btn btn-primary btn-block"
                          >
                            Add Product <font-awesome-icon icon="plus" />
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger btn-block"
                            @click="cancelFormAddProduct"
                          >
                            Cancel <font-awesome-icon icon="ban" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <!--FORM EDIT PRODUCT-->
          <transition name="slide-fade">
            <div v-if="varShowFormEditProduct">
              <div class="row">
                <div class="col-12 col-md-10 col-lg-6 px-4 py-3 mx-auto">
                  <div class="card">
                    <div class="card-header bg-primary text-white text-center">
                      <h3>Edit Product</h3>
                    </div>
                    <div class="card-body">
                      <form @submit.prevent="sendEditProduct">
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
                            <label
                              class="custom-file-label"
                              for="inputGroupFile01"
                              >Choose Image</label
                            >
                          </div>
                        </div>
                        <div class="form-group mt-2">
                          <button
                            type="submit"
                            class="btn btn-primary btn-block"
                          >
                            Edit Product <font-awesome-icon icon="edit" />
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger btn-block"
                            @click="cancelFormEditProduct"
                          >
                            Cancel <font-awesome-icon icon="ban" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <!--PRODUCT TABLE-->
          <transition name="slide-fade">
            <div v-if="varShowTableProducts">
              <h2>Products Table</h2>
              <div class="table-responsive">
                <table class="table table-bordered table-sm text-center">
                  <thead class="bg-primary text-white">
                    <tr>
                      <th scope="col">Product Name</th>
                      <th scope="col">Product Category</th>
                      <th scope="col">Sale Price</th>
                      <th scope="col">Product Description</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in products" v-bind:key="product.id">
                      <td>{{ product.productName }}</td>
                      <td>{{ product.productCategory }}</td>
                      <td>{{ product.salePrice }}</td>
                      <td>{{ product.productDescription }}</td>
                      <td class="p-2">
                        <button
                          type="button"
                          class="btn btn-danger my-1 mx-1"
                          @click="deleteProduct(product._id)"
                        >
                          <font-awesome-icon icon="trash" />
                        </button>
                        <button
                          type="button"
                          class="btn btn-success my-1 mx-1"
                          @click="editProduct(product._id)"
                        >
                          Edit <font-awesome-icon icon="edit" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </transition>
          <!--FORM ADD CATEGORY-->
          <transition name="slide-fade">
            <div v-if="varShowFormAddCategory">
              <div class="row">
                <div class="col-12 col-md-10 col-lg-6 px-4 py-3 mx-auto">
                  <div class="card">
                    <div class="card-header bg-primary text-white text-center">
                      <h3>Add Category</h3>
                    </div>
                    <div class="card-body">
                      <form @submit.prevent="addCategory">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Category Name"
                            v-model="category.categoryName"
                          />
                        </div>
                        <div class="form-group">
                          <textarea
                            class="form-control textarea-form-admin"
                            placeholder="Category Description"
                            v-model="category.categoryDescription"
                          >
                          </textarea>
                        </div>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              aria-describedby="inputGroupFileAddon01"
                              @change="onFileImgCategory"
                            />
                            <label
                              class="custom-file-label"
                              for="inputGroupFile01"
                              >Choose Image</label
                            >
                          </div>
                        </div>
                        <div class="form-group mt-2">
                          <button
                            type="submit"
                            class="btn btn-primary btn-block"
                          >
                            Add Category <font-awesome-icon icon="plus" />
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger btn-block"
                            @click="cancelFormAddCategory"
                          >
                            Cancel <font-awesome-icon icon="ban" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <!--FORM EDIT CATEGORY-->
          <transition name="slide-fade">
            <div v-if="varShowFormEditCategory">
              <div class="row">
                <div class="col-12 col-md-10 col-lg-6 px-4 py-3 mx-auto">
                  <div class="card">
                    <div class="card-header bg-primary text-white text-center">
                      <h3>Edit Category</h3>
                    </div>
                    <div class="card-body">
                      <form @submit.prevent="sendEditCategory">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Category Name"
                            v-model="category.categoryName"
                          />
                        </div>
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            placeholder="Category Description"
                            v-model="category.categoryDescription"
                          >
                          </textarea>
                        </div>
                        <div class="input-group">
                          <div class="custom-file">
                            <input
                              type="file"
                              class="custom-file-input"
                              aria-describedby="inputGroupFileAddon01"
                              @change="onFileImgCategory"
                            />
                            <label
                              class="custom-file-label"
                              for="inputGroupFile01"
                              >Choose Image</label
                            >
                          </div>
                        </div>
                        <div class="form-group mt-2">
                          <button
                            type="submit"
                            class="btn btn-primary btn-block"
                          >
                            Edit Category <font-awesome-icon icon="edit" />
                          </button>
                          <button
                            type="button"
                            class="btn btn-danger btn-block"
                            @click="cancelFormEditCategory"
                          >
                            Cancel <font-awesome-icon icon="ban" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <!--CATEGORIES TABLE-->
          <transition name="slide-fade">
            <div v-if="varShowTableCategory">
              <h2>Table of Products Categories</h2>
              <div class="table-responsive">
                <table class="table table-bordered table-sm text-center">
                  <thead class="bg-primary text-center text-white">
                    <tr>
                      <th scope="col">Product Name</th>
                      <th scope="col">Product Category</th>
                      <th scope="col">Url Img</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="category in categories" v-bind:key="category.id">
                      <td>{{ category.categoryName }}</td>
                      <td>{{ category.categoryDescription }}</td>
                      <td>{{ category.imagePath }}</td>
                      <td class="p-2">
                        <button
                          type="button"
                          class="btn btn-danger my-1 mx-1"
                          @click="deleteCategory(category._id)"
                        >
                          <font-awesome-icon icon="trash" />
                        </button>
                        <button
                          type="button"
                          class="btn btn-success my-1 mx-1"
                          @click="editCategory(category._id)"
                        >
                          Edit <font-awesome-icon icon="edit" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </transition>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import productController from "../../controllers/products.controller";
import categoryController from "../../controllers/categories.controller";

class Product {
  constructor(productName, productCategory, productDescription, salePrice) {
    this.productName = productName;
    this.productCategory = productCategory;
    this.productDescription = productDescription;
    this.salePrice = salePrice;
  }
}

class Category {
  constructor(categoryName, categoryDescription) {
    this.categoryName = categoryName;
    this.categoryDescription = categoryDescription;
  }
}

export default {
  name: "app",
  data() {
    return {
      product: {
        productName: "",
        productCategory: "",
        productDescription: "",
        salePrice: "",
        image: null
      },
      products: [],
      productToEdit: "",
      productOptions: false,
      varShowFormAddProduct: false,
      varShowTableProducts: true,
      varShowFormEditProduct: false,
      category: {
        categoryName: "",
        categoryDescription: "",
        image: null
      },
      categories: [],
      categoryToEdit: "",
      categoryOptions: false,
      varShowTableCategory: false,
      varShowFormAddCategory: false,
      varShowFormEditCategory: false
    };
  },
  created() {
    this.getProducts();
    this.getCategories();
  },
  methods: {
    ///////   Products   ////////////////////////////////////////////
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
      this.varShowFormAddProduct = false;
      this.varShowTableProducts = true;
    },
    async onFileImg(event) {
      this.product.image = event.target.files[0];
    },
    async deleteProduct(id) {
      await productController.deleteProduct(id);
      this.getProducts();
    },
    async editProduct(id) {
      const data = await productController.editProduct(id);
      this.product = new Product(
        data.productName,
        data.productCategory,
        data.productDescription,
        data.salePrice
      );
      this.productToEdit = data._id;
      this.showFormEditProduct();
    },
    showFormAddProduct() {
      this.varShowFormAddProduct = true;
      this.varShowTableProducts = false;
      this.varShowFormEditProduct = false;
      this.varShowFormAddCategory = false;
      this.varShowTableCategory = false;
      this.varShowFormEditCategory = false;
    },
    cancelFormAddProduct() {
      this.varShowFormAddProduct = false;
      this.varShowTableProducts = true;
      this.product = new Product();
    },
    showFormEditProduct() {
      this.varShowFormEditProduct = true;
      this.varShowFormAddProduct = false;
      this.varShowTableProducts = false;
      this.varShowFormAddCategory = false;
      this.varShowTableCategory = false;
      this.varShowFormEditCategory = false;
    },
    cancelFormEditProduct() {
      this.varShowFormEditProduct = false;
      this.varShowTableProducts = true;
      this.product = new Product();
    },
    async sendEditProduct() {
      const fd = new FormData();
      fd.append("productName", this.product.productName);
      fd.append("productCategory", this.product.productCategory);
      fd.append("productDescription", this.product.productDescription);
      fd.append("salePrice", this.product.salePrice);
      fd.append("image", this.product.image);

      await productController.sendEditProduct(this.productToEdit, fd);
      this.getProducts();
      this.product = new Product();
      this.varShowFormEditProduct = false;
      this.varShowTableProducts = true;
    },
    showProductOptions() {
      this.productOptions = !this.productOptions;
    },
    showTableProducts() {
      this.varShowTableProducts = true;
      this.varShowFormEditProduct = false;
      this.varShowFormAddProduct = false;
      this.varShowFormAddCategory = false;
      this.varShowTableCategory = false;
      this.varShowFormEditCategory = false;
    },
    ///////   CATEGORIES  ////////////////////////////////////////////
    async getCategories() {
      const categories = await categoryController.getCategories();
      this.categories = categories;
    },
    async addCategory() {
      const fd = new FormData();
      fd.append("categoryName", this.category.categoryName);
      fd.append("categoryDescription", this.category.categoryDescription);
      fd.append("image", this.category.image);

      await categoryController.addCategory(fd);
      this.getCategories();
      this.category = new Category();
    },
    async deleteCategory(id) {
      await categoryController.deleteCategory(id);
      this.getCategories();
    },
    async editCategory(id) {
      const data = await categoryController.editCategory(id);
      this.category = new Category(data.categoryName, data.categoryDescription);
      this.categoryToEdit = data._id;
      this.showFormEditCategory();
    },
    async onFileImgCategory(event) {
      this.category.image = event.target.files[0];
    },
    showCategoryOptions() {
      this.categoryOptions = !this.categoryOptions;
    },
    showTableCategory() {
      this.varShowTableCategory = true;
      this.varShowTableProducts = false;
      this.varShowFormEditProduct = false;
      this.varShowFormAddProduct = false;
      this.varShowFormAddCategory = false;
      this.varShowFormEditCategory = false;
    },
    showFormAddCategory() {
      this.varShowFormAddCategory = true;
      this.varShowTableProducts = false;
      this.varShowFormEditProduct = false;
      this.varShowFormAddProduct = false;
      this.varShowTableCategory = false;
      this.varShowFormEditCategory = false;
    },
    cancelFormAddCategory() {
      this.varShowFormAddCategory = false;
      this.varShowTableCategory = true;
    },
    showFormEditCategory() {
      this.varShowFormEditCategory = true;
      this.varShowTableProducts = false;
      this.varShowFormEditProduct = false;
      this.varShowFormAddProduct = false;
      this.varShowFormAddCategory = false;
      this.varShowTableCategory = false;
    },
    cancelFormEditCategory() {
      this.varShowFormEditCategory = false;
      this.varShowTableCategory = true;
    },
    async sendEditCategory() {
      const fd = new FormData();
      fd.append("categoryName", this.category.categoryName);
      fd.append("categoryDescription", this.category.categoryDescription);
      fd.append("image", this.category.image);

      await categoryController.sendEditCategory(this.categoryToEdit, fd);
      this.getCategories();
      this.category = new Category();
      this.varShowFormEditCategory = false;
      this.varShowTableCategory = true;
    }
  }
};
</script>
