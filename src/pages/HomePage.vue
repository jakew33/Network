<template>
  <div class="container mt-4 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-8">
            <div class="feed p-2">
                <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white border">
                    <form class="feed-text px-2">
                        <h6 class="text-black-50 mt-2">What's on your mind</h6>
                    </form>
                    <div class="feed-icon px-2"><i class="fa fa-long-arrow-up text-black-50"></i></div>
                </div>
                </div>
                </div>
                </div>
                <section class="row p-3 justify-content-center">
                  <button class="col-1 btn btn-success" data-bs-toggle="modal" data-bs-target="#create-post">Overshare</button>
                </section>
                </div>
  
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12" v-for="p in posts" :key="p.id">
        <PostCard :postProp="p"/>
      </div>
    </div>
  </div>
  
  <!-- <div class="container-fluid">
    <div class="row">
      <div class="col-md-12" v-for="b in banners" :key="b.id">
        <PostCard :bannerProp="b"/>
      </div>
    </div>
  </div> -->
  
  <section class="row justify-content-center pt-5">
    <div class="p-3 justify-content-center">
      <button :disabled="!newer" @click="$event => changePage(newer)" class="btn btn-light">Newer Posts</button>
      <button :disabled="!older" @click="$event => changePage(older)" class="btn btn-light">Older Posts</button>
    </div>
</section>

</template>

<script>
import { computed, onMounted } from "vue";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import PostCard from "../components/PostCard.vue";

import { logger } from "../utils/Logger.js";
import { bannersService } from "../services/BannersService.js";
  

export default {
  components: { PostCard},
    setup() {

        async function getPosts() {
          try {
                await postsService.getPosts();
              } catch (error) {
                logger.error(error)
                Pop.error(error, "[Getting Posts]");
            }
        }

        async function getBanners() {
          try {
            await bannersService.getBanners()
            // logger.log(AppState.banners)
          } catch (error) {
            logger.log(error)
            Pop.error(error.message)
          }
        }
        onMounted(() => {
            getPosts();
            getBanners()
        });

        return {
            posts: computed(() => AppState.posts),
            newer: computed(() => AppState.newer),
            older: computed(() => AppState.older),
            
            async changePage(url) {
              try {
                await postsService.changePage(url)
              } catch (error) {
                Pop.error(error)
              }
            }
        };
    },
}
</script>

<style scoped lang="scss">

</style>