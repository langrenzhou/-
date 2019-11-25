<template>
<div>
      <router-view></router-view>
</div>  
</template>
<script>

import shipei from "./zyl.js"
export default {
  components:{
   
  },
  created(){
    shipei()
  }
}
</script>

<style>

</style>
