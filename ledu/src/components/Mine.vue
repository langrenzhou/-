<template>
  <div>
    <top :top="top"></top>
    <router-view :key="$route.fullpath"></router-view>
  </div>
</template>
<script>
import axios from "axios";
import top from "./head_s";
export default {
  components: {
    top
  },
  created() {
    axios.get("http://localhost:3030/mysql").then(head => {
      this.top = head.data;
    });
  },
  data() {
    return {
      top: []
    };
  }
};
</script>

<style>
</style>