<template>
  <div class="prifilePage">
    <div class="container">
      <div class="row" v-if="profile">
        <div class="col-md-8">
          <div>
            <!-- <ProfileCard :profile="profile"/> -->
              <div class="card">
    <div class="card-body">
      <div class="profileCard text-center">
        <p class="text-center mb-0">
          <img class="rounded-circle profilePicture" :src="profile.picture" :alt="profile.name"/>
        </p>
      </div>
      <p> <b>{{ profile.name }}</b> </p>
      <p v-if="profile.socialPlatform">
      <a :href="profile.socialPlatform" target="_blank" rel="noopener"></a>
      </p>
    </div>


  </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8" v-for="p in posts" :key="p.id">
          <PostCard :postProp="p"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { postsService } from "../services/PostsService.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import { useRoute } from "vue-router";
import PostCard from "../components/PostCard.vue";
import { profileService } from "../services/ProfileService.js";

export default {
    setup() {
        const route = useRoute();

        async function getProfileById() {
            try {
                await profileService.getProfileById(route.params.id);
            }
            catch (error) {
                Pop.error(error);
            }
        }
        async function getPostsByProfile() {
            try {
                await postsService.getPostsByProfile(route.params.id);
            }
            catch (error) {
                Pop.error(error, "[Getting Posts]");
            }
        }
        onMounted(() => {
            getProfileById();
            getPostsByProfile();
        });
        return {
            profile: computed(() => AppState.activeProfile),
            posts: computed(() => AppState.posts)
        };
    },
    components: { PostCard }
}
</script>


<style lang="scss" scoped>

</style>


