<template>
  <div class="m-search">
    <div class="m-search-left">
      <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt />
    </div>
    <div class="m-search-right">
      <div class="wrapper">
        <el-input 
        v-model="search" 
        @blur="blur"
        @focus="focus"
        @input="input"
        placeholder="搜索商家或地点">
        </el-input>

        <button class="el-button el-button--primary">
          <i class="el-icon-search" />
        </button>
        <dl class="searchlist"  v-if="isFocus&&search">
          <dd><a href="javesrript:;">烤鸭1</a></dd>
          <dd><a href="javesrript:;">烧烤3</a></dd>
          <dd><a href="javesrript:;">火锅4</a></dd>
          <dd><a href="javesrript:;">烤鸭5</a></dd>
          <dd><a href="javesrript:;">烤鸭6</a></dd>
        </dl>
        <dl class="hotPlace" v-if="isFocus&&!search">
          <dt>最近搜索</dt>
          <dd><a href="javesrript:;">烤鸭</a></dd>
          <dd><a href="javesrript:;">烧烤</a></dd>
          <dd><a href="javesrript:;">火锅</a></dd>
          <dd><a href="javesrript:;">烤鸭</a></dd>
          <dd><a href="javesrript:;">烤鸭</a></dd>
          <dt>热门搜索</dt>
          <dd>天安门</dd>
          <dd>故宫</dd>
        </dl>
        

      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      search: "",
      isFocus:false,

    };
  },
  methods:{
    focus(){
      this.isFocus = true
    },
    blur(){
      setTimeout(()=>{
        this.isFocus = false
      },200)

    },
    input: _.debounce(async function(){
      
    })

  }
};
</script>

<style lang = "scss">
</style>