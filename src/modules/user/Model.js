import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

userSchema.index({ email: 1 }, { unique: true }); // doesn't work!!! created index in MongoDB

export default mongoose.model('User', userSchema);
