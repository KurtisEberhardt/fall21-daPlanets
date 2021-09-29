import { dbContext } from '../db/DbContext'

class SpeciesService {
  async createSpecies(body) {
    return await dbContext.Species.create(body)
  }

  async getSpecies() {
    const species = await dbContext.Species.find()
    if (!species) {
      throw new Error('aint got none')
    } return species
  }

  async getOneSpecies(speciesId) {
    const found = await dbContext.Species.find({ id: speciesId })
    if (!found) {
      throw new Error('invalid id')
    } return found
  }
}
export const speciesService = new SpeciesService()
