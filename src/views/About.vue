<template>
  <div class="about">
    <Navigation />
    <div class="row mx-2">
      <div class="col-12 col-md-4 px-4 py-3">
        <div class="card">
          <div class="card-header bg-primary text-white text-center">
            <h3>Add Product</h3>
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
                <input
                  type="text"
                  class="form-control"
                  placeholder="Category Description"
                  v-model="category.categoryDescription"
                />
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
              <th scope="col">Url Img</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories" :key="category.id">
              <th scope="row">{{ category._id }}</th>
              <td>{{ category.categoryName }}</td>
              <td>{{ category.categoryDescription }}</td>
              <td>{{ category.imagePath }}</td>
              <td class="p-2">
                <button
                  type="button"
                  class="btn btn-danger mt-1"
                  @click="deleteCategory(category._id)"
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
import categoryController from "../controllers/categories.controller";

class Category {
  constructor(categoryName, categoryDescription) {
    this.categoryName = categoryName;
    this.categoryDescription = categoryDescription;
  }
}

export default {
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      category: {
        categoryName: "",
        categoryDescription: "",
        image: null
      },
      categories: []
    };
  },
  created() {
    this.getCategories();
  },
  methods: {
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
    async onFileImg(event) {
      this.category.image = event.target.files[0];
    }
  }
};
</script>
