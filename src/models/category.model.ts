import mongoose from "mongoose";
import { Content } from "./content.model";

export interface Category {
  _id: mongoose.Types.ObjectId;
  category: string;
  description: string;
  content: Array<mongoose.Types.ObjectId>;
  contentDetails?: Array<Content>;
}