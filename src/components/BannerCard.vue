<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-4">
      <img class="my-5 mx-5 postImg image-fluid" :src="bannerProp?.linkURL" alt="">
    </div>
  </div>
    <div>
    <img :href="bannerProp.linkURL" target="_blank">{{ bannerProp. }}>
  </div>
</div>
</template>


<script>
import { Banner } from "../models/Banner.js";

export default {
  props:{
    bannerProp: {type: Banner, required:true}
  },
  setup(){
  return {  }
  }
};
</script>


<style lang="scss" scoped>

</style>