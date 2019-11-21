<template>
<div>
 <div class="head">
    <div class="head_left">
      <span class="fn1 fn1_a"></span>
      <span class="fn1"></span>
      <span class="fn1 fn1_a"></span>
      <span class="head_left-font">悦读 FM</span>
    </div>
    <div class="nav">
      <router-link :to="'/?type_id='+top_s.id" class="head_left-font"  v-for="top_s in top" :key="top_s.id">{{top_s.type}}</router-link>
    </div>
    <div class="head_right" v-if="login_s">
      <span @click="campu_ss('登录')">登录</span>
      <span>/</span>
      <span @click="campu_ss('注册')">注册</span>
    </div>
    <div class="head_right" v-else>已经登录</div>
  </div>
  <router-view></router-view>
</div>
 
</template>
<script>
import "../css/head.css"
import axios from "axios";
export default {
  name:"head_s",

  data() {
    return {
      top: [],
      campu_s: false,
      hid_e: "",
      login_s:true
    }
  },
  methods: {  
  },
  created() {
    axios.get("http://localhost:3030/mysql").then(head => {
      this.top = head.data;
    });
  }
};
</script>
<style></style>
