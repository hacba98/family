import Feedback from "../models/feedback";

export function addnewFeedback(obj) {
  const newFeedback = new Feedback({
    username: obj.username,
    content: obj.content,
    rating: obj.rating
  });
  return newFeedback.save();
}

export function viewAll(res) {
  let rate = null;
  Feedback.find({})
    .sort("-time")
    .then(lst => {
      rate = lst.reduce((rate, num) => {
        return rate + num.rating;
      }, 0);
      res.status(200).json({
        data: {
          count: lst.length,
          rating: rate / lst.length,
          lstFb: lst
        }
      });
    });
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
