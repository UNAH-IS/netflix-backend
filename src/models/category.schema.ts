import mongoose from "mongoose";
import { Category } from "./category.model";

const schema = new mongoose.Schema<Category>({
  category: String,
  description: String,
  content: Array<mongoose.Types.ObjectId>
});

export const CategorySchema = mongoose.model('categories',schema);// enlace