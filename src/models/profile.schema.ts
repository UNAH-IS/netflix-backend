import mongoose from "mongoose";
import { Profile } from "./profile.model";
import { BaseContent } from "./content.model";


const schema = new mongoose.Schema<Profile>({
  name: String,
  image: String,
  myList: Array<BaseContent>,
  continue: Array<BaseContent>
});

export const ProfileSchema = mongoose.model('profiles',schema);// enlace