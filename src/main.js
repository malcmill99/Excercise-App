import Vue from "vue";
import Buefy from 'buefy'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false;
Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
