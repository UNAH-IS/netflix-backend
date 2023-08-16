import mongoose from "mongoose";

export interface Category {
  _id: mongoose.Types.ObjectId;
  category: string;
  description: string;
  content: Array<mongoose.Types.ObjectId>;
}