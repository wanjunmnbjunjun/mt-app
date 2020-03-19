<template>
  <div class="m-menu">
    <dl @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="(item,idx) in menu" :key="item.type" @mouseenter="enter">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow" />
      </dd>
    </dl>
    <div class="menu-container" v-if="kind" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(item,index) in curdetail">
        <h4 :key="index">
          <a href="javascript:;">{{item.title}}</a>
        </h4>
        <a href="javascript:;" v-for="v in item.child" :key="v">{{v}}</a>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "",
      menu: [
        {
          type: "food",
          name: "美食",
          child: [
            {
              title: "美食",
              child: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "takeout",
          name: "外卖",
          child: [
            {
              title: "外卖",
              child: ["美团外卖"]
            }
          ]
        },
        {
          type: "hotel",
          name: "酒店",
          child: [
            {
              title: "酒店星级",
              child: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
            }
          ]
        }
      ]
    };
  },
  computed: {
    curdetail: function() {
      return this.menu.filter(item => item.type === this.kind)[0].child;
    }
  },
  methods: {
    mouseleave: function() {
      let self = this;
      self._timer = setTimeout(function() {
        self.kind = "";
      }, 150);
    },
    enter(e) {
      this.kind = e.target.querySelector("i").className;
    },
    sover(){
      clearTimeout(this._timer)
    },
    sout(){
      this.kind = ''
    }
  }
};
</script>

<style>
</style>