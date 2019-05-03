import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true }, // Input
  password: { type: String, required: true }, // Input
  //address: { type: String, required: true }, // Input
  phone: { type: Number, required: true } // Input
});

const User = mongoose.model("User", UserSchema);

export default User;
