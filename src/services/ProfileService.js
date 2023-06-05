import { AppState } from "../AppState.js"
import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class ProfileService {
  async getProfileById(id) {
    const res = await api.get('api/profiles/' + id)
    AppState.activeProfile = new Profile(res.data)
    logger.log(AppState.activeProfile)
  }

    async searchProfiles(searchTerm) {
    const res = await api.get('search/profiles', {
      params: {
        query: searchTerm,
        api_key: 'pOXw2OGv1LsYi7LEBmDF04RLkXQvldml'
      }
    })
    logger.log('[Searching Profiles]', res.data)
    AppState.query = searchTerm
    AppState.posts = res.data.results.map(p => new Profile(p))
  }
}

export const profileService = new ProfileService()