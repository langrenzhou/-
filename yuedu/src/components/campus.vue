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
            axios.post("http://localhost:3030/register",{
            name:this.user_name,
            psd:this.user_psd,
            email:this.user_email
         }).then((as)=>{
             if(as.status == 200){
                 this.$emit("register","注册成功")
                 this.user_email="",
                 this.user_name="",
                 this.user_psd=""
             }
         })
        
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
input {
  border: none;
}
.login {
  width: 5.5rem;
  height: 7rem;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.close {
  width: 0.5rem;
  height: 0.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  font-size: 0.35rem;
  text-align: center;
  line-height: 0.5rem;
  border-radius: 0.3rem;
  color: white;
  top: -0.2rem;
  right: -0.2rem;
}
.login_left {
  width: 5.5rem;
  height: 6rem;
  font-size: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.login_s {
  width: 100%;
  font-size: 0.4rem;
}
.name {
  font-size: 0.3rem;
}
.login-ipt_name {
  height: 1rem;
  border: 0.02rem solid;
}
.psd {
  font-size: 0.3rem;
}
.login-ipt_psd {
  margin-left: 0.24rem;
  height: 1rem;
  border: 0.02rem solid;
}
.email {
  font-size: 0.3rem;
}
.checkbo_x {
  width: 4rem;
  font-size: 0.3rem;
  display: flex;
  align-items: center;
}
.check_box {
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.5rem;
}
.login_login {
  width: 4.5rem;
  height: 0.8rem;
  background-color: #eb4235;
  color: white;
  font-size: 0.4rem;
  border-radius: 0.5rem;
  text-align: center;
  line-height: 0.8rem;
  cursor: pointer;
}
.campus {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>