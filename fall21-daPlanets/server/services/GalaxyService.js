import { dbContext } from '../db/DbContext'

class GalaxyService {
  async createGalaxy(body) {
    return await dbContext.Galaxies.create(body)
  }

  async getGalaxies() {
    const galaxies = await dbContext.Galaxies.find()
    if (!galaxies) {
      throw new Error('aint got none')
    } return galaxies
  }

  async getGalaxy(galaxyId) {
    const galaxy = await dbContext.Galaxies.find({ id: galaxyId })
    if (!galaxy) {
      throw new Error('invalid id!')
    }
  }
}

export const galaxyService = new GalaxyService()
