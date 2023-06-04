<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>

        <!-- <div class="row justify-content-center align-content-center">
        <div class="col-md-4 m-auto postCard" v-for="a in ads" :key="a.id">
          <PostCard :adProp="a"/>
        </div>
      </div> -->
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import { adsService } from "./services/AdsService.js"
import Pop from "./utils/Pop.js"

export default {
  setup() {
    async function getAds() {
      try {
        await adsService.getAds()
      } catch (error) {
          Pop.error(error, "[Getting Ads]")
        
      }
    }
    onMounted(() => {
      getAds();
    })
    return {
      appState: computed(() => AppState),
      ads: computed(() => AppState.ads)
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
