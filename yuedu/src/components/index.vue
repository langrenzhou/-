<template>
  <div id="index">
    <top></top>
    <div class="big"></div>
  </div>
</template>
<script>
import top from "./head";
export default {
  name: "index",
  components: {
    top
  },
  data() {
    return {
     
    };
  },
  methods:{
    
  }
};
</script>

<style>
.big{
  width: 2rem;
  height: 3rem;
  background-color: red
}
</style>