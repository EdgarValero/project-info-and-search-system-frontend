import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import JQuery from "jquery";
window.$ = window.JQuery = JQuery;
import "popper.js";
import "bootstrap";
import "./assets/scss/app.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTachometerAlt,
  faPlus,
  faListAlt,
  faAngleDown,
  faTrash,
  faEdit,
  faBan,
  faSearch,
  faAngleRight,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faTachometerAlt,
  faPlus,
  faListAlt,
  faAngleDown,
  faTrash,
  faEdit,
  faBan,
  faSearch,
  faAngleRight,
  faAngleLeft
);

library.add(faFacebook, faTwitter, faInstagram);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
