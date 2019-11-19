<template>
  <div class="head">
    <div class="head_left">
      <span class="fn1 fn1_a"></span>
      <span class="fn1"></span>
      <span class="fn1 fn1_a"></span>
      <span class="head_left-font">悦读 FM</span>
    </div>
    <div class="nav">
      <router-link to="/" class="a" v-for="top_s in top" :key="top_s.id">{{top_s.type}}</router-link>
    </div>
    <div class="head_right" v-if="login_s">
      <span @click="campu_ss('登录')">登录</span>
      <span>/</span>
      <span @click="campu_ss('注册')">注册</span>
    </div>
    <div class="head_right" v-else>已经登录</div>
      <campus v-show="campu_s" @hide="hide" :sho_w="hid_e" @register="register" @login="login"></campus>
  </div>
</template>
<script src="../../zyl.js"></script>
<script>
import "../css/head.css"
import campus from "./campus";
import axios from "axios";
export default {
  name:"head",
  components: {
    campus
  },
  data() {
    return {
      top: [],
      campu_s: false,
      hid_e: "",
      login_s:true
    };
  },
  methods: {
    // 登录注册的函数
    campu_ss(login_hide) {
      this.campu_s = true;
      this.hid_e = login_hide;
    },
    // 让遮罩层显示的函数
    hide(e) {
      this.campu_s = !this.campu_s;
    },
    // 点击注册的函数
    register(e){
     if(e == "注册成功"){
       this.campu_s= !this.campu_s
       
     }
    },
    // 点击登录的函数
    login(e){
      if(e == "登录成功"){
        this.campu_s= !this.campu_s
        this.login_s= !this.login_s
      }
    }
  },
  created() {
    axios.get("http://localhost:3030/mysql").then(head => {
      this.top = head.data;
    });
  }
};
</script>
<style></style>
