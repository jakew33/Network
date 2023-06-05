<template>
  <section class="row justify-content-end m-3 pt-1">
    <div class="col-2">
      <SearchBar />
    </div>
  </section>

  <section class="container-fluid">
    <div class="col-md-8">
    <PostForm @submit="createPost()">
      <textarea v-model="postBody" placeholder="OverShare"></textarea>
      <button type="submit">Over Share</button>
    </PostForm>
  </div>
</section>

    <div class="container justify-content-start">
      <div class="row">
        <div class="col-md-12" v-for="p in posts" :key="p.id">
          <PostCard :postProp="p"/>
        </div>
      </div>
    </div>

  
    
    <section class="row justify-content-center pt-5">
      <div class="p-3">
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
// import BannerCard from "../components/BannerCard.vue";
import PostForm from "../components/PostForm.vue";
import { logger } from "../utils/Logger.js";
import { bannersService } from "../services/BannersService.js";
import SearchBar from '../components/SearchBar.vue'
  

export default {
  components: { PostCard, PostForm, SearchBar},
    setup() {

        async function getPosts() {
          try {
                await postsService.getPosts();
              } catch (error) {
                logger.error(error, "[posts]")
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