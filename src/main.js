import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import BootstrapVueIcons from 'bootstrap-vue'
import  IconsPlugin  from 'bootstrap-vue'
import { Row, Column } from 'vue-grid-responsive';

Vue.component('row', Row);
Vue.component('column', Column);





Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(IconsPlugin)


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
