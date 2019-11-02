<template>
  <div>
    <div
      class="modal fade"
      id="modalSingleProduct"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ product.productName }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="d-flex justify-content-center">
              <img
                :src="`http://localhost:3000${product.imagePath}`"
                class="img-fluid"
                width="300"
                height="300"
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
                <div
                  v-else-if="product.disponibility === 'poca disponibilidad'"
                >
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: Object
  }
};
</script>
