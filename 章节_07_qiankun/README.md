乾坤微应用核心简介
=================
常用功能
-----------------
* 路由渲染应用的两种方式 
  - 基座A里，点击一个路由（/sub-vue），渲染出子应用的首页
  - 基座A里，点击一个路由（/sub-vue），渲染出子应用的/sub-vue路由对应的组件
  - 文件位置：main=>demo=>src=>main.js
###
主子应用通信
-----------------
* 官方提供的Actions通信三个核心方法（观察者模式）
  - setGlobalState：设置 globalState - 设置新的值时，内部将执行 浅检查，如果检查到 globalState 发生改变则触发通知，通知到所有的 观察者 函数。
  - onGlobalStateChange：注册 观察者 函数 - 响应 globalState 变化，在 globalState 发生改变时触发该 观察者 函数。
  - offGlobalStateChange：取消 观察者 函数 - 该实例不再响应 globalState 变化。
  - 文件位置：commit记录=>'提交描述：官方提供的主子应用通信'=>main=>demo=>src=>main.js

###
后续将继续更新...
-----------------