import { AppState } from "../AppState.js"
import { Ad } from "../models/Ad.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"



class AdsService {

  async getAds(){
    AppState.ads = []
    const res = await api.get('api/ads')
    logger.log('ads', res.data)
    AppState.ads = res.data.ads.map(a => new Ad(a))
  }
}

export const adsService = new AdsService()