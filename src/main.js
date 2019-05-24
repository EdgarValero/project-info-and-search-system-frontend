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
import {
  faTachometerAlt,
  faPlus,
  faListAlt,
  faAngleDown,
  faTrash,
  faEdit,
  faBan,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faTachometerAlt,
  faPlus,
  faListAlt,
  faAngleDown,
  faTrash,
  faEdit,
  faBan,
  faSearch
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
