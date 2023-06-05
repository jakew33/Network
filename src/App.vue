<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>

        <!-- <div class="row justify-content-center align-content-center">
        <div class="col-md-4 m-auto postCard" v-for="b in banner" :key="b.id">
          <PostCard :bannerProp="a"/>
        </div>
      </div> -->

</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import { bannersService } from "./services/BannersService.js"
// import Pop from "./utils/Pop.js"

export default {
  setup() {
    async function getBanners() {
      try {
        await bannersService.getBanners()
      } catch (error) {
          // Pop.error(error, "[Getting Ads]")
        
      }
    }
    onMounted(() => {
      getBanners();
    })
    return {
      appState: computed(() => AppState),
      // banners: computed(() => AppState.banners)
    }
  },
  components: { Navbar }

}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}

main {
  background-color: rgb(3, 17, 81);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
