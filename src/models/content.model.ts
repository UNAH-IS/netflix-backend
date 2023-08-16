import mongoose from "mongoose";

export interface BaseContent {
  _id?: mongoose.Types.ObjectId;
  name: string;
  coverImage: string;
  videoTrailer: string;
}

export interface Content extends BaseContent{
  description: string;
  type: string;
  season: number;
  duration: string;
  topTen: boolean;
  ageLimit: string;
  tags: Array<string>;
  mainContent: boolean;
}