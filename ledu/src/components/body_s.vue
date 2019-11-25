<template>
  <div class="body">
    <div class="body_area">
      <div class="body_area-left">
        <lis :content="content"></lis>
      </div>
      <div class="body_area-right"></div>
    </div>
    <div class="page">
      上一页
      <span v-for="(num,index) in length " :key="index" @click="page_s(num)">{{num}}</span>
      下一页
    </div>
  </div>
</template>
<script>

import "../css/body_s.css";
import lis from "./channle_li";
import axios from "axios";
export default {
  name: "body_s",
  components: {
    lis
  },
  created() {
    this.axios_content();
  },
  data() {
    return {
      length: 0,
      content: [],
      page: 1
    };
  },
  methods: {
    // 请求内容的
    axios_content(e) {
      if (typeof e == "object" || e == undefined) {
        this.page = 1;
      } else {
        this.page = e;
      }

      const id = this.$route.params.id;
      // 请求内容的
      axios
        .get(`http://localhost:3030/content?type_id=${id}&&page=${this.page}`)
        .then(res => {
          this.content = res.data;
        });
      axios
        .get(`http://localhost:3030/content_page?type_id=${id}`)
        .then(res => {
          var aaa=res.data.length%10;
          if (aaa === 0) {
            this.length=parseInt(res.data.length/10);
          } else {
            this.length=parseInt(res.data.length/10)+1;
          }
        });
    },
    // 点击页数请求内容的函数
    page_s(e) {
      this.axios_content(e);
    }
  },
  watch: {
    $route: `axios_content`
  }
};
</script>
<style>
</style>