<template>
  <div class="body">
    <div class="body_area">
      <div class="body_area-left">
        <lis :content="content"></lis>
      </div>
      <div class="body_area-right"></div>
    </div>
    <div class="page">
      <span v-for="(num,index) in length " :key="index" @click="page_s(num)">{{num}}</span>
    </div>
  </div>
</template>
<script>
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
      page: 1,
    };
  },
  methods: {
    // 请求内容的
    axios_content() {
      const id = this.$route.params.id;
      axios
        .get(`http://localhost:3030/content?type_id=${id}&page=1`)
        .then(e => {
          this.content = e.data;
        });
          // 请求页数的
      axios
        .get(`http://localhost:3030/content_page?type_id=${id}`)
        .then(e => {
          this.length = parseInt(e.data.length / 10);
        });
    }
  },
  watch: {
    $route: "axios_content"
  }
};
</script>


<style>
.page span {
  border: 0.02rem solid red;
}
img {
  width: 100%;
  height: 100%;
}
.body {
  width: 100%;
  /* height: 3rem; */
  background-color: rgb(245, 245, 245);
}
.body_area {
  width: 7rem;
  /* height: 3rem; */
  margin: 0 auto;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
}
.body_area-left {
  width: 4rem;
  /* background-color: pink; */
}
.body_area-right {
  width: 2.5rem;
  height: 4rem;
  background-color: orange;
}
.body_area-left-li {
  width: 100%;
  height: 1.5rem;
  /* background-color: aqua; */
  font-size: 0;
  display: flex;
  margin-bottom: 0.2rem;
  overflow: hidden;
}
.body_area-left-li_image {
  width: 1.5rem;
  height: 1.5rem;
}
.body_area-left-li_brief {
  width: 2.5rem;
  height: 1.5rem;
  background-color: white;
  font-size: 0.18rem;
  padding: 0.1rem;
}
.body_area-left-li_brief-author {
  font-size: 0.12rem;
}
.body_area-left-li_brief-content {
  font-size: 0.14rem;
  width: 2.2rem;
  height: 0.7rem;
  /* background-color: pink; */
  overflow: hidden;
}
</style>