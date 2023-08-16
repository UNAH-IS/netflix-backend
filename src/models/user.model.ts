import mongoose from 'mongoose';
import { BaseProfile } from './profile.model';

export interface Plan {
  name: string;
  maxProfiles: number;
}

export interface User {
  _id?: mongoose.Types.ObjectId;
  email: string;
  password: string;
  plan: Plan; // Composición
  profiles: Array<BaseProfile>
}

