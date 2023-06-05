<template>
  <div class="container">
    <div class="row justify-content-start p-1 mb-5">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="createPost()">
              <input class="form-control m-2 w-250" type="text" placeholder="Say Something" name="body"/>
              <input class="form-control m-2 w-250" type="text" placeholder="Add Image" name="imgUrl" />
              <button class="btn btn-success col-4 m-2" type="submit">OverShare</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { postsService } from "../services/PostsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { logger } from "../utils/Logger.js";

import Pop from "../utils/Pop.js";
export default {
  setup() {

    async function createPost() { 
      try {
        const form = window.event.target
        const formData = getFormData(form)
        logger.log(formData)
        form.reset()
        await postsService.createPost(formData)
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