<template>
  <div>
    <Navigation />
    <div class="row mx-2 mt-signin">
      <div class="col-8 col-md-6 col-lg-4 mx-auto">
        <div class="card">
          <div class="card-header bg-success text-white text-center">
            <h3>Admin SignIn</h3>
          </div>
          <img src="../../assets/img/logo-sis-web.png" class="img-fluid" />
          <div class="card-body">
            <form>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required
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
  }
};
</script>
<style lang="scss">
.mt-signin {
  margin-top: 7rem;
}
</style>
