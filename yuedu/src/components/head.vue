<template>
  <div class="head">
    <div class="nav">
      <router-link to="/" class="a" v-for="top_s in top" :key="top_s.id">{{top_s.type}}</router-link>
    </div>
  </div>
</template>
<script src="../../zyl.js"></script>
<script>
import axios from "axios"
export default {
  data() {
    return {
      top:[]
    };
  },
  methods: {
    as() {
      this.$emit("ems", 123);
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
.head{
  display: flex;
}
.a {
  color: black;
  text-decoration: none;
}
</style>
