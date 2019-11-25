<template>
  <div>
    <div v-for="des in details" :key="des.id">
      
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "detail_s",
  created() {
    axios
      .get(`http://localhost:3030/details?id=${this.$route.params.id}`)
      .then(as =>{
         this.details=as.data
         console.log(as.data)
      });
  },
  data() {
    return {
      details: []
    };
  },
  methods: {}
};
</script>
<style>
</style>a