<template>
  <div class="component">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Create Post</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <form @submit="submitPostForm()">
            <div class="modal-body" name="modal-body">
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <input type="text" v-model="editable.description" required class="form-control" id="description">
                </div>
                <div class="mb-3">
                    <label for="imgUrl" class="form-label">ImgUrl</label>
                    <input type="url" v-model="editable.imgUrl" required class="form-control" id="imgUrl">
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Create Post</button>
            </div>
        </form>
    </div>

  </div>
</template>



<script>

import { postsService } from "../services/PostsService.js";
import { Modal } from "bootstrap";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { ref } from "vue";
export default {
  setup(){

    const editable = ref({})
  return { 
    editable,

    async submitPostForm() {
      try {
        logger.log('submitting postForm')
        const formData = editable.value
        window.EventTarget.preventDefault()
        await postsService.createPost(formData)
        editable.value = {}
        Modal.getOrCreateInstance('#create-post').hide()
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
        
      }
    }
   }
  }
};
</script>


<style lang="scss" scoped>

</style>