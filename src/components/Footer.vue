<template>
  <div class="p-0 mt-2" style="border-top: solid 5px #007bff;">
    <div class="bg-success pt-3 px-2 m-0 text-white">
      <div class="row mx-3 text-center">
        <div class="col-12 col-md-4">
          <strong> Sistema de Información y Búsqueda 2019 &copy;</strong>
        </div>
        <div class="col-12 col-md-4">
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
              <a href="https://www.facebook.com">
                <font-awesome-icon
                  :icon="{ prefix: 'fab', iconName: 'facebook' }"
                  class="footer-icon-facebook"
                />
              </a>
              <a href="https://www.instagram.com">
                <font-awesome-icon
                  :icon="{ prefix: 'fab', iconName: 'instagram' }"
                  class="footer-icon-instagram"
                />
              </a>
              <a href="https://www.twitter.com">
                <font-awesome-icon
                  :icon="{ prefix: 'fab', iconName: 'twitter' }"
                  class="footer-icon-twitter"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-4">
          <strong> Diseñado por Edgar Valero y Stefanny Querales</strong>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.footer-icon-facebook {
  font-size: 2.9rem;
  color: #fff;
  margin: 0 0.5rem;
}

.footer-icon-facebook:hover {
  color: #ccc;
}

.footer-icon-twitter {
  font-size: 2.9rem;
  color: #fff;
  margin: 0 0.5rem;
}

.footer-icon-twitter:hover {
  color: #ccc;
}

.footer-icon-instagram {
  font-size: 2.9rem;
  color: #fff;
  margin: 0 0.5rem;
}

.footer-icon-instagram:hover {
  color: #ccc;
}
</style>
