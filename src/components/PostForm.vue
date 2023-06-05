<template>
  <div class="container">
    <div class="row justify-content-start p-1 mb-5">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="createPost()">
              <input class="form-control m-2" type="text" placeholder="Say Something" name="Say Something"/>
              <input class="form-control m-2" type="text" placeholder="Add Image" />
              <button class="btn btn-success col-4 m-2" type="submit">OverShare</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { logger } from "../utils/Logger.js";

import Pop from "../utils/Pop.js";
export default {
  setup() {
    async function createPost(event) { 
      try {
        const postBody = event.target.postBody.value;
        logger.log(postBody); 
      } catch (error) {
        Pop.error(error);
      }
    }
    
    return { createPost };
  },
};
</script>

<style lang="scss" scoped>

</style>