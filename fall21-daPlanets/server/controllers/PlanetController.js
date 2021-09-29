import { planetService } from '../services/PlanetService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { speciesPlanetService } from '../services/SpeciesPlanetService'

export class PlanetController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getPlanets)
      .get('/:id', this.getPlanet)
      .get('/:id/species', this.getSpeciesByPlanetId)
      .post('', this.createPlanet)
  }

  async createPlanet(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const planet = await planetService.createPlanet(req.body)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async getPlanet(req, res, next) {
    try {
      res.send(await planetService.getPlanet())
    } catch (error) {
      next(error)
    }
  }

  async getSpeciesByPlanetId(req, res, next) {
    try {
      res.send(await speciesPlanetService.getSpeciesByPlanetId(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async getPlanets(req, res, next) {
    try {
      res.send(await planetService.getPlanet(req.params.id))
    } catch (error) {
      next(error)
    }
  }
}
