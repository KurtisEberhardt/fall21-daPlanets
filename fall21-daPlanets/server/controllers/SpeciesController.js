import { Auth0Provider } from '@bcwdev/auth0provider'
import { speciesService } from '../services/SpeciesService'
import BaseController from '../utils/BaseController'

export class SpeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getSpecies)
      .get('/:id', this.getOneSpecies)
      .post('', this.createSpecies)
  }

  async createSpecies(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      res.send(await speciesService.createSpecies(req.body))
    } catch (error) {
      next(error)
    }
  }

  async getOneSpecies(req, res, next) {
    try {
      res.send(await speciesService.getOneSpecies(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async getSpecies(req, res, next) {
    try {
      res.send(await speciesService.getSpecies())
    } catch (error) {
      next(error)
    }
  }
}
