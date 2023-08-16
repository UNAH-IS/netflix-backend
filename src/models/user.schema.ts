import mongoose from "mongoose";
import { User } from "./user.model";
import { BaseProfile } from "./profile.model";

const schema = new mongoose.Schema<User>({
  email: String,
  password: String,
  plan: Object,
  profiles: Array<BaseProfile>
});

export const UserSchema = mongoose.model('users',schema);// enlace