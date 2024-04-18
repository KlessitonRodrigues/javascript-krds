import { Schema, model } from 'mongoose';

export const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export const UserModel = model('User', userSchema);
