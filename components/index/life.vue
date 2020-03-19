<template>
  <div class="m-life">
    <el-row>
      <el-col :span="14">
        <eslider />
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic" />
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
          <p>Hi！你好</p>
          <p>
            <nuxt-link to="/aa">
              <el-button round>注册</el-button>
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/aaa">
              <el-button round>立即登陆</el-button>
            </nuxt-link>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel" />
      </el-col>
      <el-col :span="7">
        <div class="m-life-music" />
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop" />
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt />
          <P>美团APP手机版</P>
          <h4>
            <span>1元起</span>吃喝玩乐
          </h4>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import Eslider from "./slider";
export default {
  components: {
    Eslider
  }
};
</script>

<style>
</style>