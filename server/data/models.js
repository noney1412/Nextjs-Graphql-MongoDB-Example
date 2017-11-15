import mongoose from "../config/mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String
});

export default mongoose.model("users", userSchema);
