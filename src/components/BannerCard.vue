<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-4">
      <img class="my-5 mx-5 postImg image-fluid" :src="bannerProp?.linkURL" alt="">
    </div>
  </div>
    <div>
    <h1>{{ ad.title }}</h1>
    <a :href="banner.linkURL" target="_blank">{{ bannerProp.banner }}</a>
    <img :src="banner.banner" alt="Banner">
    <img :src="banner.square" alt="Square">
    <img :src="banner.tall" alt="Tall">
  </div>
</div>
</template>


<script>
import { Banner } from "../models/Banner.js";

export default {
  props:{
    adProp: {type: Banner, required:true}
  },
  setup(){
  return {  }
  }
};
</script>


<style lang="scss" scoped>

</style>