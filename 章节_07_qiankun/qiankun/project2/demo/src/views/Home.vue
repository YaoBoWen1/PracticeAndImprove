<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>子应用Vue-Mobile的首页</div>
   <template v-if="isInQiankun">
      <button @click="changeUsername">改变全局的用户名称</button>
      <p>vuex的`global module`的user state：<code> {{ JSON.stringify(user) }}</code></p>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'
export default {
  name: "Home",
  computed: {
    ...mapState('global', ['user']),
    isInQiankun () {
      return window.__POWERED_BY_QIANKUN__
    }
  },
  methods: {
    ...mapActions('global', ['setGlobalState']),
    changeUsername () {
      // 也可通过 store.commit('global/setGlobalState', { user: '李四' }) 进行操作
      this.setGlobalState({
        user: { name: '李四' + Math.round(Math.random() * 100) }
      })
    }
  }
};
</script>
