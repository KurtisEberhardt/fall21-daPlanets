import { dbContext } from '../db/DbContext'

class StarService {
  async createStar(body) {
    return await dbContext.Stars.create(body)
  }

  async getStars() {
    const stars = await dbContext.Stars.find()
    if (!stars) {
      throw new Error('no stars')
    } return stars
  }

  async getStar(starId) {
    const star = await dbContext.Stars.find({ id: starId })
    if (!star) {
      throw new Error('invalid id!')
    } return star
  }
}

export const starService = new StarService()
