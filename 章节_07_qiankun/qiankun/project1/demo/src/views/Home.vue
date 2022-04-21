<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>子应用Vue的首页</div>
    <template v-if="isInQiankun">
      <button @click="gotoSubReact">从当前子应用内跳转到`sub-vue-mobile`子应用</button>
      <button @click="changeUsername">改变全局的用户名称</button>
      <p>vuex的`global module`的user state：<code> {{ JSON.stringify(user) }}</code></p>
    </template>
  </div>
</template>

<script>
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
    },
    gotoSubReact () {
      history.pushState(null, 'sub-vue-mobile', '/sub-vue-mobile')
    },
  }
};
</script>
