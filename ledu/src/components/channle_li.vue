<template>
  <div>
        <ul>
            <router-link :to="{name:'detail_s',params:{id:num.id}}" tag="li" class="body_area-left-li" v-for="num in content" :key="num.id">
              <div class="body_area-left-li_image">
                  <img src="../01.jpg" alt />
              </div>
              <div class="body_area-left-li_brief">
                <p>{{num.title.slice(0,8)}}</p>
                <p class="body_area-left-li_brief-author">
                  <span>{{num.author}}</span>&nbsp;&nbsp;
                  <span>{{num.podcast}}</span>&nbsp;&nbsp;
                  <span>{{num.duration}}</span>&nbsp;&nbsp;
                  <span>{{num.play_time}}次</span>
                </p>
                <div class="body_area-left-li_brief-content" escape="false">{{num.content}}</div>
              </div>
            </router-link>
          </ul>
  </div>
</template>

<script>
export default {
  props:{
      content:Array,
  },
  created(){
  }
}
</script>

<style>

</style>