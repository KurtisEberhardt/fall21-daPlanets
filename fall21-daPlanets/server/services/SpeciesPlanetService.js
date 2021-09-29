import { dbContext } from '../db/DbContext'

class SpeciesPlanetService {
  async createSpeciesPlanet(body) {
    return await dbContext.SpeciesPlanet.create(body)
  }

  async getSpeciesByPlanetId(id) {
    const species = await dbContext.SpeciesPlanet.find({ planetId: id }).populate('planet').populate('species').populate('creator')
    if (!species) {
      throw new Error('Invalid Planet Id!')
    }
    return species
  }
}
export const speciesPlanetService = new SpeciesPlanetService()
