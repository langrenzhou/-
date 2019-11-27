<template>
  <div>
      <div class="body_right-top">
         <img src="../02.jpg" alt="">
      </div>
      <div class="body_right_body">
           <p>{{type}}频道 TOP 10</p>
      </div>
  </div>
</template>

<script>
import "../css/body_right.css"
export default {
  props:{
      type:String
  }
}
</script>

<style>

</style>