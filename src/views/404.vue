<template>
  <div class="container shadow-box my-auto mx-auto pt-3 pb-3 mt-404">
    <div class="d-flex justify-content-center">
      <img src="../assets/img/logo-sin-fondo.png" class="img-fluid" />
    </div>
    <h2 class="text-center mt-1">
      Error 404 <font-awesome-icon icon="sad-tear" />
    </h2>
    <p class="lead text-center">
      ¡Esta no es la página web que estas buscando!
    </p>
  </div>
</template>
<script>
export default {
  name: "Error404NotFound",
  mounted() {
    document.title = "Pagina no Encontrada";
  }
};
</script>
<style lang="scss">
.mt-404 {
  margin-top: 6rem !important;
}
</style>
