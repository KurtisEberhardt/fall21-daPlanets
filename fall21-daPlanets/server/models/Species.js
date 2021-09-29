import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const SpeciesSchema = new Schema({
  accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  name: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } }
)

SpeciesSchema.virtual('creator', {
  localField: 'accountId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
