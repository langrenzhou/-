<template>
  <div class="details_big">
    <div v-for="des in details" :key="des.id" class="details">
      <div class="details_left">
        <div class="text-brief">
          <div class="text-brief_area">
            <p class="text-brief_p">{{des.title}}</p>
            <div class="text-brief_author">
              <p class="text-brief_author-pa">
                <span>{{des.author}}</span>&nbsp;&nbsp;
                <span>{{des.podcast}}</span>&nbsp;&nbsp;
                <span>{{des.duration}}</span>&nbsp;&nbsp;
                <span></span>
              </p>
              <p class="text-brief_author-pb">播放{{des.play_time}}次</p>
            </div>
            <div class="text-brief_img">
              <img src="../01.jpg" alt />
            </div>
            <div class="text-brief-play">
              <!-- 这里是播放器的东西 -->
            </div>
          </div>
        </div>
        <div class="details_content">
          <div class="details_content-area">
            <div :class="['details_conten-area_cnt',{'hit':hit}]">{{des.content}}</div>
            <div class="details_conten-area_play" @click="aaa">{{play}}</div>
          </div>
        </div>
      </div>
      <div class="details_right"></div>
    </div>
  </div>
</template>
<script>
import "../css/details.css"
import axios from "axios";
export default {
  name: "detail_s",
  created() {
    axios
      .get(`http://localhost:3030/details?id=${this.$route.params.id}`)
      .then(as => {
        this.details = as.data;
        if (this.details[0].content.length > 150) {
          this.hit = true;
          console.log("大于150了")
        } else {
          console.log("小于150了")
          this.hit = false;
          this.play=""
        }
      });
  },
  data() {
    return {
      details: [],
      hit: true,
      play: "展开全文"
    };
  },
  methods: {
    // 点击展开全文时的函数
    aaa() {
        this.hit = !this.hit;
      if (this.hit) {
        this.play = "展开全文";
      } else {
        this.play = "收起";
      }
    }
  }
};
</script>
