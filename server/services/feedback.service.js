import Feedback from "../models/feedback";

export function addnewFeedback(obj) {
  const newFeedback = new Feedback({
    username: obj.username,
    content: obj.content,
    repairman_id: obj.repairman_id
  });
  return newFeedback.save();
}

export function deleteFeedback(obj, cb) {
  return Feedback.findOne({ _id: obj.fb_id, username: obj.username }).exec(
    (err, res) => {
      if (err) cb(err);
      else if (!res) cb("Username not existed.");
      else {
        cb(null);
        Feedback.findByIdAndDelete(res._id);
      }
    }
  );
}

export function updateFeedback(obj, cb) {
  return Feedback.findByIdAndUpdate(obj.id, { content: obj.content });
}
