import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true }, // Input
  password: { type: String, required: true }, // Input
  address: { type: String }, // Input
  fullname: { type: String },
  phone: { type: Number }, // Input
  isMale: { type: Boolean },
  role: {
    type: String,
    enum: ["USER", "ADMIN"]
  }
});

const User = mongoose.model("User", UserSchema);

export default User;
