<template>
  <div id="app">
    <div class="fixtop">
      <navTop/>
    </div>
    <div class="main">
      <div class="left"><leftBar/></div>
      <div class="right" id="subApp"></div>
    </div>
    
  </div>
</template>
<script>
import NProgress from 'nprogress'
import navTop from '@/components/navTop.vue'
import leftBar from '@/components/leftBar.vue'
export default {
  name: "App",
  components: {
    navTop,
    leftBar
  },
  data() {
    return {
      isLoading: true
    };
  },
  watch: {
    isLoading (val) {
      if (val) {
        NProgress.start()
      } else {
        this.$nextTick(() => {
          NProgress.done()
        })
      }
    }
  },
  created () {
    NProgress.start()
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.fixtop{
  background: #000000;
  color:#ffffff;
  position: fixed;
  top: 0;
  height: 50px;
  line-height: 50px;
  width: 100%;
}
.main{
  margin-top: 60px;
  display: flex;
  justify-content: flex-start;
  position: relative;
  height: calc(100vh - 70px);
}
.left{
  height: 100%;
  width: 210px;
  overflow-y: auto;
  
}
.right{
  width: calc(100% - 210px);
  height: 100%;
  overflow-y: auto;
}
</style>
