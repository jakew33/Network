<template>
    <form @submit.prevent="searchPosts(), searchProfiles()">
        <input class="w-120" type="text" v-model="search" placeholder="Search..." />
    </form>
</template>

<script>
import { ref } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { postsService } from '../services/PostsService.js';
import { profileService } from "../services/ProfileService.js";


export default {
    setup() {
        const search = ref('')
        return {
            search,

            async searchPosts() {
                try {
                    const searchTerm = search.value
                    logger.log('searching post', searchTerm)
                    await postsService.searchPosts(searchTerm)
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            },
                
                        async searchProfiles() {
                try {
                    const searchTerm = search.value
                    logger.log('searching post', searchTerm)
                    await profileService.searchProfiles(searchTerm)
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            }
        };
    },
};
</script>

<style></style>