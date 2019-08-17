<template>
  <div>
    <Navigation />
    <div class="row mx-2 mt-signin">
      <div class="col-12 col-md-6 col-lg-4 mx-auto">
        <div class="d-flex justify-content-center">
          <img src="../../assets/img/logo-sin-fondo.png" class="img-fluid" />
        </div>
        <div class="d-flex justify-content-center text-center">
          <h3>Admin Sign In</h3>
        </div>
        <transition name="slide-fade">
          <div v-if="message.value">
            <div class="alert p-2" :class="message.class" role="alert">
              <strong
                ><font-awesome-icon :icon="message.icon" class="mr-2" />
                {{ message.content }}</strong
              >
              <button type="button" class="close" @click="closeMessage">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </transition>
        <div class="card shadow">
          <div class="card-body">
            <form @submit.prevent="sendSignin">
              <div class="form-group">
                <label for="signin.email" class="font-weight-bold"
                  >Correo Electronico</label
                >
                <input
                  type="email"
                  v-model="signin.email"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="signin.password" class="font-weight-bold"
                  >Contraseña</label
                >
                <input
                  type="password"
                  v-model="signin.password"
                  class="form-control"
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Navigation
  },
  data() {
    return {
      signin: {
        email: "",
        password: ""
      },
      message: {
        value: false,
        content: "",
        class: "",
        icon: ""
      }
    };
  },
  methods: {
    async sendSignin() {
      const formData = new FormData();
      formData.append("adminEmail", this.signin.email);
      formData.append("adminPassword", this.signin.password);

      const res = await fetch("http://localhost:3000/api/users-admin/signin", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      const msg = data.msg;
      const token = data.token;
      if (msg === "intro_your_email") {
        this.message.content = "Intoduzca su correo electrico";
        this.message.class = "custom-alert-danger";
        this.message.icon = "exclamation-triangle";
        this.message.value = true;
      }
      if (msg === "incorrect_password") {
        this.message.content = "Su contraseña es incorrecta";
        this.message.class = "custom-alert-danger";
        this.message.icon = "exclamation-triangle";
        this.message.value = true;
      }
      if (msg === "intro_your_password") {
        this.message.content = "Introduzca su contraseña";
        this.message.class = "custom-alert-danger";
        this.message.icon = "exclamation-triangle";
        this.message.value = true;
      }
      if (msg === "user_not_found") {
        this.message.content = "Usuario no existe!";
        this.message.class = "custom-alert-danger";
        this.message.icon = "exclamation-triangle";
        this.message.value = true;
      }
      if (!msg) {
        this.$router.push("/admin/dashboard");
        console.log("Usuario Logeado");
      }
    },
    closeMessage() {
      this.message.value = false;
    }
  }
};
</script>
<style lang="scss">
.mt-signin {
  margin-top: 7rem;
}
</style>
