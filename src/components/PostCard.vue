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
        <p class="likes text-light fs-10"><i class="text-light mdi mdi-heart fs-10"></i> {{ postProp.likeIds.length }}</p>
        <p class="likes text-light fs-10">Posted: {{ postProp.createdAt }}</p>
      </div>
      <div class="text-end py-2">
        <button @click="deletePost(postProp?.id)" v-if="postProp?.creator.id == account?.id" class="btn btn-danger"
            title="Delete Car"><i class="mdi mdi-delete"></i> </button>
      </div>
    </div>
  </div>

<!-- <div class="container mt-4 mb-1">
    <div class="d-flex justify-content-center row text-light">
        <div class="col-md-8">
            <div class="p-2">
                <div class="postCard border mt-2">
                    <div>
                        <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                            <div class="d-flex flex-row align-items-center px-2 profile"><img class="rounded-circle" :src="postProp?.creator.picture" width="45">
                              
                                <div class="d-flex flex-column flex-wrap ml-2"><span class="font-weight-bold">{{ postProp?.creator.name }}</span><span class="text-black-50 time">{{ postProp.createdAt }}</span></div>
                            </div>
                            <p class="likes mx-5"><i class="mdi mdi-heart fs-10"></i> {{ postProp.likeIds.length }}</p>
                        </div>
                    </div>
                    <div class="p-2 px-3"><span>{{ postProp?.body }}</span></div>
                    <img class="my-5 mx-5 postImg" :src="postProp?.imgUrl" alt="">
                    <div class="d-flex flex-column flex-wrap ml-2 mx-5 my-1"><span class="text-light-50 time">{{ postProp.createdAt }}</span></div>
                    
                </div>
            </div>
        </div>
    </div>
</div> -->
    
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
  object-fit: fit;

  .likes{
    font-size: 80px;
  }

}
}

</style>