<template>
  <div class="m-header">
    <el-row>
      <el-col>
        <top-bar />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <!-- <search-bar /> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TopBar from "./topBar";
export default {
  components: {
    TopBar
  }
};
</script>

<style lang="scss" >
@import "@/assets/css/public/layout.scss";
</style>