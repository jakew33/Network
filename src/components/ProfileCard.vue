<template>
<div>hello</div>
</template>


<script>
import { computed } from "vue";
// import { Account } from "../models/Account.js";
// import { Profile } from "../models/Profile.js";


export default {
  // props: {
  //   profile: { type: [Profile, Account], required: true }
  // },
  setup(props) {
  return { 
    coverImg: computed(() => `url${props.profile?.coverImg}`)
    }
  }
};
</script>


<style lang="scss" scoped>

</style>