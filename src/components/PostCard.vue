<template>


    <div class="container">
    <div class="row justify-content-center align-content-center">
      <div class="card postCard elevation-1 my-3 col-md-8 justify-content-center">
        <h1 class=" d-flex justify-content-center text-light">{{ postProp?.creator.name }} </h1>
        <router-link class="col-md-8 align-content-center" :to="{name: 'Profile', params: { id: postProp?.creatorId}}">
          <img class="rounded-circle profile my-5 mx-5" :src="postProp?.creator.picture" alt="">
        </router-link>
        <h5 class="align-content-center text-light mx-5">{{ postProp?.body }}</h5>
        <img class="my-5 mx-5 postImg" :src="postProp?.imgUrl" alt="">
        <p class="text-light"><i class="text-light mdi mdi-heart"></i> {{ postProp.likeIds.length }}</p>
        <p class="text-light">Posted: {{ postProp.createdAt }}</p> 
        <button class ="col-2 justify-content-center m-3" @click="deletePost(postProp.id)" v-if="postProp?.creator.id == account?.id">Delete</button>
        </div>
      </div>
    </div>  
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";
// import { AppState } from '../AppState';
import { Post } from "../models/Post.js";
import { postsService } from "../services/PostsService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
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
      async deletePost(postId) {
        try {
          await postsService.deletePost(postId)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
          
        }
      },
      account: computed(() => AppState.account)
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
  object-fit: contain;


}
}

</style>