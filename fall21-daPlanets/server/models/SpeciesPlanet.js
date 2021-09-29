import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const SpeciesPlanetSchema = new Schema(
  {
    accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    speciesId: { type: Schema.Types.ObjectId, ref: 'Species', required: true },
    planetId: { type: Schema.Types.ObjectId, ref: 'Planet', required: true }
  }, { timestamps: true, toJSON: { virtuals: true } }
)

SpeciesPlanetSchema.virtual('creator', {
  localField: 'accountId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

SpeciesPlanetSchema.virtual('planet', {
  localField: 'planetId',
  ref: 'Planet',
  foreignField: '_id',
  justOne: true
})

SpeciesPlanetSchema.virtual('species', {
  localField: 'speciesId',
  ref: 'Species',
  foreignField: '_id',
  justOne: true
})
