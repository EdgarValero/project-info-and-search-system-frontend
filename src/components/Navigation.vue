<template>
  <div class="bg-success fixed-top" style="border-bottom:3px solid #007bff;">
    <nav
      class="navbar navbar-expand-md navbar navbar-dark bg-success container"
    >
      <router-link class="navbar-brand" to="/">API SIB</router-link>
      <button
        class="navbar-toggler button-collapse bg-primary text-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse row my-2 ml-md-2" id="navbarNav">
        <div class="col-12 col-md-6">
          <form>
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search ..."
                style="border-radius: 20px; padding: 20px;"
              />
              <div class="input-group-prepend">
                <button
                  type="submit"
                  class="btn btn-primary ml-2"
                  style="border-radius: 50%;"
                >
                  <font-awesome-icon icon="search" />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-12 col-md-6">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/products"
                >Productos</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sucursals">
                Sucursales
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/dashboard">
                Dashboard
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
