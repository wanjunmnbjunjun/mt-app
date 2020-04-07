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
          <dd v-for="(item,index) in searchList" :key="index"><a href="javesrript:;">{{item.name}}</a></dd>
        </dl>
        <dl class="hotPlace" v-if="isFocus&&!search">
          <dt>热门搜索</dt>
          <dd v-for="(item,index) in $store.state.home.hotPlace" :key="index"><a href="javesrript:;">{{item.name}}</a></dd>
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
      searchList:[]

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
      let self = this
      let city = this.$store.state.geo.position.city.replace("市","")
      self.searchList = []
      let {status,data:{top}} = await this.$axios.get('/search/top',{
        params:{
          input:self.search,
          city:city
        }
      })
      if(status == 200){
        self.searchList = top.slice(0,10)
      }
      
    },300)
    

  }
};
</script>

<style lang = "scss">
</style>