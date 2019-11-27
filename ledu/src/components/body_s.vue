<template>
  <div class="body">
    <div class="body_area">
      <div class="body_area-left">
        <lis :content="content"></lis>
      </div>
      <div class="body_area-right">
           <right :type="type"></right>
      </div>
    </div>
    <div class="page">
      <div @click="page_up('上一页')" class="page_up" v-if="pages">上一页</div>
      <div class="page_width">
        <div class="page_left" left="0.02">
          <span
            v-for="(num,index) in length"
            :key="index"
            :class="{page_color:num == page?true:false}"
            @click="page_s(num)"
          >{{num}}</span>
        </div>
      </div>
      <div @click="page_up('下一页')" class="page_up" v-if="next">下一页</div>
    </div>
    <div class="join_my">
      <router-link to="/join">加入我们</router-link>
      <router-link to="/about">关于我们</router-link>
    </div>
  </div>
</template>
<script>
import right from "./body_right"
import "../css/body_s.css";
import lis from "./channle_li";
import axios from "axios";
export default {
  name: "body_s",
  components: {
    lis,
    right
  },
  created() {
    this.axios_content();
  },
  data() {
    return {
      length: 0,
      content: [],
      page: 1,
      pages: true,
      next: true,
      type:""
    };
  },
  methods: {

    // 请求页数做分页效果的
    axios_content(e) {
      if (typeof e == "object" || e == undefined) {
        this.page = 1;
      } else {
        this.page = e;
      }
      const id = this.$route.params.id;
      //判断id然后向子组件right传递的
      if(id == 1){
        this.type="悦读"
      }else if(id == 2){
         this.type="情感"
      }else if(id == 3){
         this.type="校园"
      }else if(id == 4){
         this.type="连播"
      }else if(id == 5){
         this.type="音乐"
      }else if(id == 6){
         this.type="Labs"
      }
      // 请求内容的
      axios
        .get(`http://localhost:3030/content?type_id=${id}&&page=${this.page}`)
        .then(res => {
          this.content = res.data;
        });
      // 请求页数的
      axios
        .get(`http://localhost:3030/content_page?type_id=${id}`)
        .then(res => {
          // 拿到评论数前10的文章
          console.log(res.data)
          var aaa = res.data.length % 10;
          if (aaa === 0) {
            this.length = parseInt(res.data.length / 10);
          } else {
            this.length = parseInt(res.data.length / 10) + 1;
          }
        });
      // 判断页数显示上一页的
      if (this.page == 1) {
        this.pages = false;
      } else {
        this.pages = true;
      }
      // 判断页数显示下一页
      if (this.page == this.length) {
        this.next = false;
      } else {
        this.next = true;
      }
    },
    // 点击页数请求内容的函数
    page_s(e) {
      this.axios_content(e);
    },
    // 点击上一页和下一页时调用的函数
    page_up(e) {
      if (e == "上一页") {
        if (this.page == 1) {
          alert("没有上一页了");
        } else {
          this.page--;
          this.axios_content(this.page);
        }
      } else {
        this.page++;
        this.axios_content(this.page);
      }
    }
  },
  watch: {
    $route: `axios_content`
  }
};
</script>
<style>
</style>