<template>
  <div id="index">
    <top></top>
    <div class="body">
      <div class="body_area">
        <div class="body_area-left">
          <ul>
            <li class="body_area-left-li" v-for="num in content" :key="num.id">
              <div class="body_area-left-li_image">
                <img src="../../01.jpg" alt="">
              </div>
              <div class="body_area-left-li_brief">
                <p>{{num.title}}</p>
                <p class="body_area-left-li_brief-author">
                  <span>{{num.author}}</span>
                  <span>{{num.podcast}}</span>
                  <span>{{num.duration}}</span>
                  <span>{{num.play_time}}次</span>
                </p>
                <div class="body_area-left-li_brief-content" escape="false">
                  {{num.content}}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="body_area-right">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import top from "./head";
export default {
  name: "index",
  components: {
    top
  },
  created() {
    axios.get("http://localhost:3030/content_page?type_id=1").then(e => {
      this.length = e.data.length;
      console.log(this.length);
    });
    axios.get("http://localhost:3030/content?type_id=1&page=1").then(e => {
      this.content = e.data;
    });
  },
  data() {
    return {
      length: 0,
      content: []
    };
  },
  methods: {}
};
</script>

<style>
img {
  width: 100%;
  height: 100%;
}
.body {
  width: 100%;
  /* height: 3rem; */
  /* background-color: red; */
}
.body_area {
  width: 7rem;
  /* height: 3rem; */
  margin: 0 auto;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between
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
.body_area-left-li{
  width: 100%;
  height: 1.5rem;
  background-color: aqua;
    font-size: 0;
    display: flex;
    margin-bottom: 0.2rem;
    overflow: hidden;
}
.body_area-left-li_image{
  width: 1.5rem;
  height: 1.5rem;
}
.body_area-left-li_brief{
  width: 2.5rem;
  height: 1.5rem;
  background-color: red;
  font-size: 0.18rem;
  padding: 0.3rem;
}
.body_area-left-li_brief-author{
  font-size: 0.12rem;
}
.body_area-left-li_brief-content{
  font-size: 0.14rem;
}
</style>