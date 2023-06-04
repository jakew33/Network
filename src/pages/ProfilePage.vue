<template>
  <div class="profileCard">
    <div class="container">
      <div class="row mt-2" v-if="profile">
        <div class="col-md-8 m-auto">
          <div>
            <ProfileCard :profile="profile"/>
            <div class="card">
              <div class="card-body">
                <div class="profileCard text-center">
                  <p class="text-center mb-0">
                    <img class="rounded-circle profilePicture" :src="profile.picture" :alt="profile.name"/>
                    <img class="my-5 mx-5 postImg image-fluid" :src="profile?.coverImg" alt="">
        </p>
      </div>
      <p>UserName <b>{{ profile.name }}</b></p>
      <p>Subs: <b>{{ profile.subs.length}}</b></p>
      <p>Contact: <b>{{ profile.email }}</b></p>
      <p>Socials: <b>{{ profile.github }}</b></p>
      <p>About Me: <b>{{ profile.bio }}</b></p>
      <p>Resume: <b>{{ profile.resume}}</b></p>
      <p>Class: <b>{{ profile.class}}</b></p>
      <p>Graduated: <b>{{ profile.graduated}}</b></p>
      <p v-if="profile.socialPlatform">
      <a :href="profile.socialPlatform" target="_blank" rel="noopener"></a>
    </p>
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

// .profileCard {
//   background-image: v-bind(coverImg);
//   aspect-ratio: 1/1;

//   background-size: cover;
//   background-repeat: no-repeat;
//   display: grid;
//   place-content: center;
// }



</style>


