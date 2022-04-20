import './public-path';
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router";
import store from "./store";
Vue.use(VueRouter);
Vue.config.productionTip = false;

let router = null;
let instance = null;
function render(props = {}) {
  const { container,routerBase } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
// 从生命周期 mount 中获取通信方法，props默认会有onGlobalStateChange和setGlobalState两个api
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  /*进阶部分开始 主子通信*/
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log('vue子应用打印的参数:',state, prev);
  });
  props.setGlobalState({user:{name:'李四'}});
  /*进阶部分结束 主子通信*/
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}

