import Vue from 'vue'

const requireComponent = require.context(
  // 其组件目录的相对路径
  './',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\w+\.js$/
)
requireComponent.keys().forEach(component => {
  // 获取组件配置
  const componentConfig = requireComponent(component)
  // 兼容import export 和 require module.export两种规范
  const ctrl = componentConfig.default || componentConfig
  // 全局注册组件
  if(ctrl && ctrl.name){
    Vue.component(ctrl.name, ctrl)
  }
})