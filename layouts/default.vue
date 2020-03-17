<template>
  <el-container class="layout-default">
    <el-header>
      <my-header></my-header>
    </el-header>
    <el-main>
      <!-- <h1 style="width:100%;height:300px;background:red">main</h1> -->
    </el-main>
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</template>
<script>
import MyHeader from "@/components/public/header/index";
export default {
  components: {
    MyHeader
  }
};
</script>
<style  lang="scss">
@import "@/assets/css/public/layout.scss";
</style>
