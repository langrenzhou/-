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
    <div class="head_right">
      <span @click="campu_ss">登录</span>
      <span>/</span>
      <span>注册</span>
    </div>
      <campus v-show="campu_s" @hide="hide"></campus>
  </div>
</template>
<script src="../../zyl.js"></script>
<script>
import campus from "./campus"
import axios from "axios"
export default {
  components:{
    campus
  },
  data() {
    return {
      top:[],
      campu_s:false
    };
  },
  methods: {
    // 遮罩层的函数
    campu_ss(){
      this.campu_s = true
    },
    hide(e){
       this.campu_s = !this.campu_s
    }
  },
  created(){
    axios.get("http://localhost:3030/mysql").then((head)=>{
     this.top=head.data
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.search{
  border:none;
  width: 0.2rem;
  height: 0.2rem;
}
.head{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 1rem;
}
.a {
  color: black;
  text-decoration: none;
  font-size: 0.18rem;
  padding: 0.15rem;
}
.nav{
  font-size: 0;
}
.head_left{
  display: flex;
  align-items: center
}
.fn1{
  font-size: 0;
  display: block;
  width: 0.04rem;
  background-color: #ee5044;
  height: 0.28rem;
  margin-left: 0.03rem;
  border-radius: 0.08rem;
}
.fn1_a{
  height: 0.18rem;
  margin-top: 0.06rem;
}
.head_left-font{
  font-size: 0.16rem;
  margin-left: 0.06rem;
}
.head_right{
  height: 100%;
  display: flex;
  font-size: 0.18rem;
  align-items: center;
}
.head_right span{
  padding: 0.03rem;
}
</style>
