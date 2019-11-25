<template>
  <div class="campus">
    <div class="login">
      <div class="close" @click="hide">X</div>
            <!-- 这个是登录 -->
      <div class="login_left" v-if="login">
        <p class="login_s">登录</p>
        <div class="name">
          用户名：
          <input type="text" placeholder="请输入您的用户名" class="login-ipt_name" v-model="user_name" />
        </div>
        <div class="psd">
          密码：
          <input type="password" class="login-ipt_psd" placeholder="请输入你的密码" v-model="user_psd" />
        </div>
        <div class="checkbo_x">
          <input type="checkbox" class="check_box" />7天免登录
        </div>
        <div class="login_login" @click="register_login('登录')">登录</div>
      </div>
      <!-- 这个是注册 -->
      <div class="login_left" v-else>
        <p class="login_s">注册</p>
        <div class="name">
          用户名：
          <input type="text" placeholder="请输入您的用户名" class="login-ipt_name" v-model="user_name" />
          <br />
        </div>
        <div class="psd">
          密码：
          <input type="password" class="login-ipt_psd" placeholder="请输入你的密码" v-model="user_psd" />
        </div>
        <div class="email">
          邮箱：
          <input type="email" class="login-ipt_psd" placeholder="请输入你的邮箱" v-model="user_email" />
        </div>
        <div class="checkbo_x">
          <input type="checkbox" class="check_box" />7天免登录
        </div>
        <div class="login_login" @click="register_login('注册')">注册</div>
      </div>
    </div>
  </div>
</template> 
<script>
import '../css/campus.css'
import axios from "axios"
export default {
  name:"campus",
  props: ["sho_w"],
  data() {
    return {
      login: false,
      asd: "",
      user_name:"",
      user_psd:"",
      user_email:""
    }
  },
  methods: {
    //   遮罩层函数
    hide() {
      this.$emit("hide", "hide");
    },
    // 登录注册的函数
    register_login(d){
     if(d == "登录"){
         axios.post("http://localhost:3030/login",{
            name:this.user_name,
            psd:this.user_psd
         }).then((as)=>{
             if(as.data == 0){
                 alert("用户名或密码错误")
                 this.name="";
                 this.psd="";
             }else{
                 alert("登录成功")
                 this.$emit("login","登录成功")
                this.name="";
                this.psd="";
             }
         })
     }else if(d == "注册"){
         if(this.user_name == this.user_psd){
             alert("用户名与密码请勿一致")
         }
         
        
     }
    }
  },
  watch: {
    sho_w(nw) {
      if (nw == "登录") {
        this.login = true;
      } else {
        this.login = false;
      }
    }
  }
};
</script>
<style>
</style>