<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <e-menu></e-menu>
      </el-col>
      <el-col :span="19">
        <el-row>
          <ul class="nav">
            <li>
              <a href="javascript:;">美团外卖</a>
            </li>
            <li>
              <a href="javascript:;">猫眼电影</a>
            </li>
            <li>
              <a href="javascript:;">美团酒店</a>
            </li>
            <li>
              <a href="javascript:;">民宿／公寓</a>
            </li>
            <li>
              <a href="javascript:;">商家入驻</a>
            </li>
            <li>
              <a href="javascript:;">美团公益</a>
            </li>
          </ul>
        </el-row>
        <el-row>
          <lift /> 
        </el-row>

        
      </el-col>
    </el-row>
    <!-- <el-row>
      <life />
    </el-row>-->
  </div>
</template>

<script>
import Artistic from "@/components/index/artistic";
import Lift from "@/components/index/life";
import EMenu from "@/components/index/menu";

export default {
  components: {
    Artistic,
    Lift,
    EMenu
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
