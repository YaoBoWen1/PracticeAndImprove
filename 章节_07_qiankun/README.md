乾坤微应用核心简介
=================
常用功能
-----------------
* 路由渲染的几种方式 
  - 基座里，点击一个路由（/sub-vue），渲染出子应用的首页
  - 基座里，点击一个路由（/sub-vue），渲染出子应用的/sub-vue路由对应的组件
  - - 文件位置：main=>demo=>src=>micro-apps.js
  - 子应用A里，跳转到子应B，头部导航高亮
  - 子应用A里，跳转到基座（此处不是无感刷新，后续再研究...原因:路由规则被乾坤定义沙箱代替）
* setDefaultMountApp('/sub-vue'):设置默认加载的子应用
* 应用切换时：无感刷新
  - 文件位置：main=>demo=>src=>components=>navTop.vue
* 应用切换时：头部加载动画
  - 文件位置：main=>demo=>src=>App.vue+main.js
###
主子应用通信
-----------------
* 官方提供的Actions通信三个核心方法（观察者模式）
  - setGlobalState：设置 globalState - 设置新的值时，内部将执行 浅检查，如果检查到 globalState 发生改变则触发通知，通知到所有的 观察者 函数。
  - onGlobalStateChange：注册 观察者 函数 - 响应 globalState 变化，在 globalState 发生改变时触发该 观察者 函数。
  - offGlobalStateChange：取消 观察者 函数 - 该实例不再响应 globalState 变化。
  - 文件位置：commit记录=>提交描述：'官方提供的主子应用通信'这个时期的项目=>main/project2=>demo=>src=>main.js
* 初步应用在项目的主子通信
  - 基座的文件位置
    - main => demo => src => store.js 封装官方的方法
    - main => demo => src => micro-apps.js 下发主应用的数据给子
    - main => demo => src => components => navTop.vue 获取变化后的state
  - 子应用1文件位置
    - main => demo => src => main.js mouted初始化时，集成乾坤的核心props到vuex
    - main => demo => src => store => global.js 封装关于主子通信的逻辑到vuex
    - main => demo => src => views => home.vue 通过vuex获取变化后的state

  
###
后续将继续更新...
-----------------