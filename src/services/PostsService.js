import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PostsService {

  async getPosts() {
    AppState.posts = []
    const res = await api.get('api/posts')
    logger.log('posts', res.data)
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.newer = res.data.newer;
    AppState.older = res.data.older;
  }

  async getPostsByProfile(id) {
    AppState.posts = []
    const res = await api.get('api/posts', {
      params: {
        creatorId: id
      }
    })
    AppState.posts = res.data.posts.map(p => new Post((p)))
  }

  async createPost(formData) {
    const res = await api.post('api/posts', formData)
    logger.log('[Making Post]', res.data)
    AppState.posts.unshift(new Post(res.data))
  }

  async deletePost(formData) {
    const res = await api.delete('api/posts/id')
    logger.log('[Deleting Post]', res.data)
  }

  async changePage(url) {
    const res = await api.get(url)
    logger.log('changing page', res.data)
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.newer = res.data.newer;
    AppState.older = res.data.older;
  }

  async searchPosts(searchTerm) {
    const res = await api.get('search', {
      params: {
        query: searchTerm,
        api_key: 'pOXw2OGv1LsYi7LEBmDF04RLkXQvldml'
      }
    })
    logger.log('[SearchingApi]', res.data)
    AppState.query = searchTerm
  }
}

export const postsService = new PostsService()