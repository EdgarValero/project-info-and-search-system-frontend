<template>
  <div class="footer">
    <footer class="navbar navbar-expand-md navbar-dark bg-dark mt-3">
      <router-link class="navbar-brand" to="/">
        Copyright&copy; - 2019
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#Footer"
        aria-controls="Footer"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="Footer">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Facebook</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Twitter</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Instagram</router-link>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
