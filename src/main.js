import Vue from "vue";
import App from "./App.vue";

import "vue-awesome/icons/flag";
import "vue-awesome/icons";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
