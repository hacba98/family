import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RatingSchema = new Schema({
  username = {type: String, required: true},
  repairman_id = {type: Object, required: true},
  post_id = {type: Object, required: true},
  date = {type: Date, default: Date.now(),
  rate_point = {type: Number, required: true}}
});

const Rating = mongoose.model("Rating", RatingSchema);

export default Rating;
