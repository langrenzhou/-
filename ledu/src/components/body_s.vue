<template>
  <div class="body">
      <div class="body_area">
        <div class="body_area-left">
          <ul>
            <li class="body_area-left-li" v-for="num in content" :key="num.id">
              <div class="body_area-left-li_image">
                <router-link to="/details">
                  <img src="../01.jpg" alt />
                </router-link>
                <router-view></router-view>
              </div>
              <div class="body_area-left-li_brief">
                <p>{{num.title}}</p>
                <p class="body_area-left-li_brief-author">
                  <span>{{num.author}}</span>&nbsp;&nbsp;
                  <span>{{num.podcast}}</span>&nbsp;&nbsp;
                  <span>{{num.duration}}</span>&nbsp;&nbsp;
                  <span>{{num.play_time}}次</span>
                </p>
                <div class="body_area-left-li_brief-content" escape="false">{{num.content}}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="body_area-right"></div>
      </div>
      <div class="page">
        <span v-for="(num,index) in length " :key="index" @click="page_s(num)">{{num}}</span>
      </div>
    </div>
</template>
<script src="zyl.js"></script>
<script>
import axios from "axios";
export default {
  name: "body_s",
  created() {
    axios
      .get(`http://localhost:3030/content_page?type_id=${this.type_id}`)
      .then(e => {
        this.length = parseInt(e.data.length / 10);
      });
    axios
      .get(`http://localhost:3030/content?type_id=${this.type_id}&page=1`)
      .then(e => {
        this.content = e.data;
      });
  },
  data() {
    return {
      length: 0,
      content: [],
      page: 1,
      type_id: 1
    };
  },
  methods: {
    a(a) {
      axios.get(`http://localhost:3030/content_page?type_id=${a}`).then(e => {
        this.length = parseInt(e.data.length / 10);
      });
      axios
        .get(`http://localhost:3030/content?type_id=${a}&page=${this.page}`)
        .then(e => {
          this.content = e.data;
        });
    },
    page_s(e) {
      var hash_s = location.hash.split("/");
      if (hash_s[1] == "") {
        this.type_id = 1;
      } else {
        this.type_id = hash_s[1];
      }
      axios
        .get(`http://localhost:3030/content_page?type_id=${this.type_id}`)
        .then(e => {
          this.length = parseInt(e.data.length / 10);
        });
      axios
        .get(`http://localhost:3030/content?type_id=${this.type_id}&page=${e}`)
        .then(e => {
          this.content = e.data;
        });
    }
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