import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PlanetSchema = new Schema({
  accountId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  starId: { type: Schema.Types.ObjectId, ref: 'Star', required: true },
  name: { type: String, required: true }
}, { timestamps: true, toJSON: { virtuals: true } }
)

PlanetSchema.virtual('creator', {
  localField: 'accountId',
  ref: 'Account',
  foreignField: 'id',
  justOne: true
})
