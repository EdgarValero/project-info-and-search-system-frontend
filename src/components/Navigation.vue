<template>
  <div class="bg-success fixed-top" style="border-bottom:5px solid #007bff;">
    <nav
      class="navbar navbar-expand-md navbar navbar-dark bg-success container p-0 px-2"
    >
      <router-link class="navbar-brand" to="/">
        <img src="../assets/img/logo-sis-web.png" height="85" width="85" />
      </router-link>
      <button
        class="navbar-toggler button-collapse bg-primary text-white mr-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle Navigation"
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
      <div class="collapse navbar-collapse row my-2 ml-md-2" id="navbarNav">
        <div class="col-12 col-md-6">
          <form @submit.prevent="searchProduct">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Busca aquí tu producto..."
                style="border-radius: 20px; padding: 20px;"
                v-model="search"
                required
              />
              <div class="input-group-prepend">
                <button
                  type="submit"
                  class="btn btn-primary ml-2 mr-2"
                  style="border-radius: 50%;"
                >
                  <font-awesome-icon icon="search" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-12 col-md-6 p-0">
          <ul class="navbar-nav mx-4">
            <li class="nav-item">
              <router-link class="nav-link navbar-link" to="/productos"
                >Productos</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link navbar-link" to="/sucursales">
                Sucursales
              </router-link>
            </li>
            <li v-if="authenticate" class="nav-item">
              <router-link class="nav-link navbar-link" to="/admin/dashboard">
                Dashboard
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  computed: {
    authenticate() {
      if (localStorage.auth_token) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    searchProduct() {
      this.$router.push(`/productos-buscados/${this.search}`);
      this.searchInProductSearch();
    },
    searchInProductSearch() {
      this.$emit("searchInProductSearch", this.search);
    }
  }
};
</script>
<style lang="scss">
.navbar-link {
  color: #fff !important;
}
.navbar-link:hover {
  color: #ccc !important;
}
</style>
