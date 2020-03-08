<template>
  <el-row :gutter="0">
  <el-col :span="5">
    <Geo/>
  </el-col>
  <el-col :span="5">
    <user/>
  </el-col>
  <el-col :span="14">
    <Navbar/>
  </el-col>
</el-row>
</template>

<script>
import Geo from './geo.vue'
import User from "./user"
import Navbar from "./nav"

export default {
  components:{
    Geo,
    User,
    Navbar
  }

}
</script>

<style lang="scss" >

@import "@/assets/css/public/header/topbar.scss";


</style>