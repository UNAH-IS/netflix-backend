import mongoose from "mongoose";
import { BaseContent } from "./content.model";

export interface BaseProfile {
  _id?: mongoose.Types.ObjectId;
  name: string;
  image: string;
}

export interface Profile extends BaseProfile {
  myList: Array<BaseContent>;
  continue: Array<BaseContent>;
}