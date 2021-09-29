import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StarSchema = new Schema(
  {
    accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    galaxyId: { type: Schema.Types.ObjectId, ref: 'Galaxy', required: true },
    name: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

StarSchema.virtual('creator', {
  localField: 'accountId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
