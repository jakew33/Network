<template>
  <div class="container">
    <div class="row justify-content-center align-content-center">
      <div class="card postCard elevation-1 my-3 col-md-8 justify-content-center">
        <router-link class="col-md-8 align-content-center" :to="{name: 'Profile', params: { id: postProp?.creatorId}}">
        <p class=" d-flex justify-content-center"> <b>User:</b>{{ postProp?.creator.name }} </p>
        <img class="rounded-circle profile my-5 mx-5" :src="postProp?.creator.picture" alt="">
        </router-link>
        <h3 class="align-content-center text-light mx-5">{{ postProp?.body }}</h3>
        <img class="my-5 mx-5 postImg" :src="postProp?.imgUrl" alt="">
        <p class="likes"><i class="mdi mdi-heart fs-10"></i>{{ postProp.likeIds.length }}</p>
      </div>
    </div>
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
  object-fit: contain;
}

.postCard{
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);

.postImg{
  aspect-ratio: 1/1;
  object-fit: fit;

  .likes{
    font-size: 80px;
  }

}
}

</style>