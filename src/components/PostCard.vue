<template>
  <div class="postCard elevation-1 d-flex justify-content-center col-md-4">
    <router-link :to="{name: 'Profile', params: { id: postProp?.creatorId}}">
      <p class=" d-flex justify-content-between">{{ postProp?.creator.name }} </p>
      <img class="rounded-circle profile my-5 mx-5" :src="postProp?.creator.picture" alt="">
      </router-link>
      <p>

      </p>
      <div class="d-flex justify-content-center col-md-6 my-5 mx-2">
        <h3>{{ postProp?.body }}</h3>
        <div class="d-flex justify-content-between">
        </div>
      </div>
        <p>{{ postProp.likeIds.length }}</p>
    </div>
</template>




<script>
// import { AppState } from '../AppState';
import { Post } from "../models/Post.js";
// import { logger } from "../utils/Logger.js";
export default {
    props:{
      postProp: {type: Post, required:true}
    },
  setup(){
  return { 
      // setActivePost() {
      //   AppState.activePost = props.postProp
      //   logger.log('[props.post]', props.postProp)
      // }
    }
  }
};
</script>


<style lang="scss" scoped>
.profile {
  height: 100px;
  aspect-ratio: 1/1;
  object-fit: cover;
}

</style>