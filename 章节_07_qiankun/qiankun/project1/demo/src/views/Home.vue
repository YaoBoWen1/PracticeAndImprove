<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>子应用Vue的首页</div>
    <template v-if="isInQiankun">
      <button @click="gotoSubReact">从当前子应用内跳转到`sub-vue-mobile`子应用</button>
    </template>
  </div>
</template>

<script>

export default {
  name: "Home",
  computed: {
    isInQiankun () {
      return window.__POWERED_BY_QIANKUN__
    }
  },
  methods: {
    gotoSubReact () {
      history.pushState(null, 'sub-vue-mobile', '/sub-vue-mobile')
    },
  }
};
</script>
