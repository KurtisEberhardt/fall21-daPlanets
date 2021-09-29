import { galaxyService } from '../services/GalaxyService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
export class GalaxyController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getGalaxies)
      .get('/:id', this.getGalaxy)
      .post('', this.createGalaxy)
  }

  async createGalaxy(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      res.send(await galaxyService.createGalaxy(req.body))
    } catch (error) {
      next(error)
    }
  }

  async getGalaxy(req, res, next) {
    try {
      res.send(await galaxyService.getGalaxy(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async getGalaxies(req, res, next) {
    try {
      res.send(await galaxyService.getGalaxies())
    } catch (error) {
      next(error)
    }
  }
}
