<template>
  <div class="m-header">
    <el-row :gutter="0">
      <div class="m-top">
        <el-col :span="5">
          <div class="m-geo">
            <i class="el-icon-location" />北京
            <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>
            <span>[</span>
            <nuxt-link to="/changeCity">太原</nuxt-link>
            <nuxt-link to="/changeCity">鞍山</nuxt-link>
            <nuxt-link to="/changeCity">福州</nuxt-link>
            <span>]</span>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="m-user">
            <template v-if="user">
              欢迎您，
              <span class="user">wwj</span>
              <nuxt-link to="/exit" class="exit">退出</nuxt-link>
            </template>
            <template v-else>
              <nuxt-link to="/login" class="login">立即登陆</nuxt-link>
              <nuxt-link to="/register" class="register m-l-10">注册</nuxt-link>
            </template>
          </div>
        </el-col>
        <el-col :span="14">
          <my-nav></my-nav>
        </el-col>
      </div>
    </el-row>
    <el-row>
      <div class="m-search">
        <el-col>
          <search></search>
        </el-col>
      </div>
      
    </el-row>
  </div>
</template>

<script>
import MyNav from "./nav";
import Search from "./search";
export default {
  components: {
    MyNav,
    Search
  },
  data() {
    return {
      user: false
    };
  }
};
</script>

<style lang="scss" >
@import "@/assets/css/public/header.scss";
</style>