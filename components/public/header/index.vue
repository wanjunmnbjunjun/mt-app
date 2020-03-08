<template>
  <div class="m-header">
    <el-row :gutter="0">
      <el-col :span="5">
        <div class="m-geo">
          <i class="el-icon-location" />
          <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>[太原 北京 鞍山]
        </div>
      </el-col>
      <el-col :span="5">
        <div class="m-user">
          <template v-if="user">
            欢迎您，
            <span>wwj</span>
            <nuxt-link to="/exit">退出</nuxt-link>
          </template>
          <template v-else>
            <nuxt-link to="/login" class="login">立即登陆</nuxt-link>
            <nuxt-link to="/register" class="register m-l-10">注册</nuxt-link>
          </template>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="m-nav">
          <ul class="nav">
            <li>我的美团</li>
            <li>手机APP</li>
            <li>商家中心</li>
            <li>网站导航</li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: false
    };
  }
};
</script>

<style lang="scss" >
@import "@/assets/css/public/layout.scss";
</style>