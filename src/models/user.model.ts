import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
  password: String
});

export const UserModel = model('users', userSchema);