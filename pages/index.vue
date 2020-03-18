<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5" >
        <e-nav></e-nav>
      </el-col>
      <el-col :span="19">
        <ul class="nav">
          <li>美团外卖</li>
          <li>猫眼电影</li>
          <li>美团酒店</li>
          <li>民宿／公寓</li>
          <li>商家入驻</li>
          <li>美团公益</li>
        </ul>
        <article />

      </el-col>
    </el-row>
    <el-row>
      <life />
    </el-row>
  </div>
</template>

<script>
import Artistic from "@/components/index/artistic"
import Lift from "@/components/index/life"
import EMenu from "@/components/index/menu"

export default {
  components: {
    Artistic,
    Lift,
    EMenu,

  }
}
</script>

<style>

</style>
