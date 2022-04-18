import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start } from 'qiankun';
Vue.config.productionTip = false;

registerMicroApps([
  {
    name: 'demoTwo',
    entry: 'http://localhost:8081',
    container: '#app',
    activeRule: '/app-vue',
  }
]);
// 启动 qiankun
start();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
