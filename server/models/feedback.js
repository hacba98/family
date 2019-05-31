import mongoose, { Schema, SchemaTypes } from "mongoose";

const FeedbackSchema = Schema({
  username: { type: String, required: true },
  content: { type: String, required: true },
  time: { type: Date, default: Date.now() },
  repairman_id: { type: SchemaTypes.ObjectId, required: true }
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

export default Feedback;
