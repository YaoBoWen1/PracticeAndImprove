import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Banner from './components/Banner'
import './components/globalComponents'
console.log(Banner)
Vue.config.productionTip = false
// Vue.component('globalComponent', Banner)
Vue.component('globalComponent', {render(){return <h3>普通加载全局组件</h3>}})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
