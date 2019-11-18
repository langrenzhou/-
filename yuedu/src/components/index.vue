<template>
  <div id="index">
    <top></top>
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
      t: "这是父组件的数据"
    };
  },
  methods:{
    
  }
};
</script>

<style>
a {
  list-style: none;
}
</style>