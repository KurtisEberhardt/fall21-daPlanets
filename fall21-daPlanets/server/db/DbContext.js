import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy'
import { PlanetSchema } from '../models/Planet'
import { SpeciesSchema } from '../models/Species'
import { StarSchema } from '../models/Star'
import { SpeciesPlanetSchema } from '../models/SpeciesPlanet'
class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  Galaxies = mongoose.model('Galaxies', GalaxySchema);
  Stars = mongoose.model('Stars', StarSchema);
  Planets = mongoose.model('Planet', PlanetSchema);
  Species = mongoose.model('Species', SpeciesSchema)
  SpeciesPlanet = mongoose.model('SpeciesPlanet', SpeciesPlanetSchema)
}

export const dbContext = new DbContext()
