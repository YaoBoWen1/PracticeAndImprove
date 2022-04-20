import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start } from 'qiankun';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/*进阶部分开始 主子通信*/
import { initGlobalState } from 'qiankun';

// 初始化 state
const initialState = {
  user: {} // 用户信息
};
const actions = initGlobalState(initialState);
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log('主应用打印的参数:',state, prev);
});
actions.setGlobalState({user:{name:'张三'}});
actions.offGlobalStateChange();
/*进阶部分结束 主子通信*/
Vue.config.productionTip = false;
Vue.use(ElementUI);
/*
  routerBase设定/或者不设，子应用的根路由是/，这时，子路由再定义个sub-vue，那么/sub-vue就是子应用的sub-vue路由对应模块
  routerBase设定/sub-vue，子应用的根路由是/sub-vue，那么/sub-vue就是子应用的首页
*/
registerMicroApps([
  {
    name: 'demoTwo',
    entry: 'http://localhost:8081',
    container: '#subApp',
    activeRule: '/sub-vue',
    props: {
      routerBase: '/sub-vue' // 下发路由给子应用，指定子应用根路由
    }
  }
]);
// 启动 qiankun
start();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
