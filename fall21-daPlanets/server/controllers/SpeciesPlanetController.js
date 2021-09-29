import { Auth0Provider } from '@bcwdev/auth0provider'
import { speciesPlanetService } from '../services/SpeciesPlanetService'
import BaseController from '../utils/BaseController'

export class SpeciesPlanetController extends BaseController {
  constructor() {
    super('api/speciesplanet')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createSpeciesPlanet)
  }

  async createSpeciesPlanet(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      res.send(await speciesPlanetService.createSpeciesPlanet(req.body))
    } catch (error) {
      next(error)
    }
  }
}
