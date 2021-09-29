import { dbContext } from '../db/DbContext'

class PlanetService {
  async createPlanet(body) {
    return await dbContext.Planets.create(body)
  }

  async getPlanets() {
    const planets = await dbContext.Planets.find().populate('creator')
    if (!planets) {
      throw new Error('no planets')
    } return planets
  }

  async getPlanet(planetId) {
    const planet = await dbContext.Planets.find({ id: planetId })
    if (!planet) {
      throw new Error('invalid id!')
    } return planet
  }
}

export const planetService = new PlanetService()
