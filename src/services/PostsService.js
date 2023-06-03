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

  async changePage(url) {
    const res = await api.get(url)
    logger.log('changing page', res.data)
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.newer = res.data.newer;
    AppState.older = res.data.older;
  }
}

export const postsService = new PostsService()