<template>
  <div class="p-3">
    <button :disabled="!newer" @click="$event => changePage(newer)" class="btn btn-light">Newer</button>
    <button :disabled="!older" @click="$event => changePage(older)" class="btn btn-light">Older</button>
  </div>



  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12" v-for="p in posts" :key="p.id">
        <PostCard :postProp="p"/>
      </div>
    </div>


      
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import PostCard from "../components/PostCard.vue";

export default {
    setup() {
        async function getPosts() {
            try {
                await postsService.getPosts();
            }
            catch (error) {
                Pop.error(error, "[Getting Posts]");
            }
        }
        onMounted(() => {
            getPosts();
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
    components: { PostCard }
}
</script>

<style scoped lang="scss">

</style>
