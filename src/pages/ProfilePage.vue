<template>
  <div class="profileCard">
    <div class="container">
      <div class="row mt-2" v-if="profile">
        <div class="card col-md-8 m-auto">
          <div>
            <ProfileCard :profile="profile"/>
            <div class="card">
              <div class="card-body">
                <div class="profileCard text-center">
                  <p class="text-center mb-0">
                    <img class="my-5 mx-5 coverImg image-fluid" :src="profile?.coverImg" alt="">
                    <img class="rounded-circle profilePicture justify-content-start" :src="profile.picture" :alt="profile.name"/>
                  </p>
                </div>
                <div class="col-4">
                  <p>Username: <b>{{ profile.name }}</b></p>
                  <p>Subs: <b>{{ profile.subs.length}}</b></p>
                  <p>e-mail: <b>{{ profile.email }}</b></p>
                  <p>Socials: <b>{{ profile.github }}</b></p>
                  <p>About Me: <b>{{ profile.bio }}</b></p>
                  <p>Resume: <b>{{ profile.resume}}</b></p>
                  <p>Graduated: <b>{{ profile.graduated}}</b></p>
                  <p>Class: <b>{{ profile.class}}</b></p>
                  <p v-if="profile.socialPlatform">
                    <a :href="profile.socialPlatform" target="_blank" rel="noopener"></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row justify-content-center align-content-center">
      <div class="col-md-12 m-auto postCard" v-for="p in posts" :key="p.id">
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
import { useRoute } from "vue-router";
import PostCard from "../components/PostCard.vue";
import { profileService } from "../services/ProfileService.js";
import { logger } from "../utils/Logger.js";

export default {
    setup() {
        const route = useRoute();

        async function getProfileById() {
            try {
                await profileService.getProfileById(route.params.id);
                logger.log(AppState.profile)
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


<style lang="scss" scoped>

.profilePicture{
  height: 100px;
  aspect-ratio: 1/1;
}

.coverImg {
  height: 500px;
  aspect-ratio: 1/1;
}





</style>


