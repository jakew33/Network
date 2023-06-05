<template>

  <div></div>

</template>


<script>
import { computed } from "vue";
import { Account } from "../models/Account.js";
import { Profile } from "../models/Profile.js";


export default {
  props: {
    profile: { type: [Profile, Account], required: true }
  },
  setup(props) {
  return { 
    coverImg: computed(() => `url${props.profile?.coverImg}`)
    }
  }
};
</script>


<style lang="scss" scoped>

// .profileCard{
//   background-image: v-bind(coverImg);
//   background-size: contain;
//   background-repeat: no-repeat;
//   place-content: center;
// }

// .profilePicture {
//   height: 100px;
//   aspect-ratio: 1/1;
//   object-fit: cover;
// }

</style>