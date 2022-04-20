<template>
  <div>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item><div style="width:190px;font-size:18px;">乾坤DEMO~</div></el-menu-item>
    <el-menu-item index="1">主应用</el-menu-item>
    <el-submenu index="2">
      <template slot="title"><a href="/sub-vue">子应用1</a></template>
      <el-menu-item index="2-1" disabled>选项1</el-menu-item>
      <el-menu-item index="2-2" disabled>选项2</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1" disabled>选项1</el-menu-item>
        <el-menu-item index="2-4-2" disabled>选项2</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>子应用2</el-menu-item>
  </el-menu>
  </div>
  
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>