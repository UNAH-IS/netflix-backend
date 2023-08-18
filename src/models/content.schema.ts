import mongoose from "mongoose";
import { Content } from "./content.model";

const schema = new mongoose.Schema<Content>({
  name: String,
  coverImage: String,
  videoTrailer: String,
  description: String,
  type: String,
  season: Number,
  duration: String,
  topTen: Boolean,
  ageLimit: String,
  tags: Array<String>,
  mainContent: Boolean
});

export const ContentSchema = mongoose.model('contents',schema);// enlace