import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const GalaxySchema = new Schema(
  {
    accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    name: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

GalaxySchema.virtual('creator', {
  localField: 'accountId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
