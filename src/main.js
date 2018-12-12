import Vue from "vue";
import "./lib/ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js'
// import Api from "./api";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
