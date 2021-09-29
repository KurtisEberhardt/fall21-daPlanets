import { starService } from '../services/StarService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class StarController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getStars)
      .get('/:id', this.getStar)
      .post('', this.createStar)
  }

  async createStar(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      res.send(await starService.createStar(req.body))
    } catch (error) {
      next(error)
    }
  }

  async getStar(req, res, next) {
    try {
      res.send(await starService.getStar(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async getStars(req, res, next) {
    try {
      res.send(await starService.getStars())
    } catch (error) {
      next(error)
    }
  }
}
