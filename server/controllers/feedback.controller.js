import * as FeedbackService from "../services/feedback.service";

export function postNewFeedback(req, res) {
  const { username } = req.params;
  const { content, repairman_id } = req.body;

  if (!username || !content || !repairman_id)
    return res.status(403).json({ error: "Missing required data field(s)." });

  return FeedbackService.addnewFeedback({ username, content, repairman_id })
    .then(_ => res.status(200).end())
    .catch(err => console.log("give-feedback-error", err));
}

export function deleteFeedback(req, res) {
  const { username, fb_id } = req.params;

  if (!username || !fb_id)
    return res.status(403).json({ error: "Missing required data field(s)." });

  return FeedbackService.deleteFeedback({ username, fb_id }, err => {
    if (err) res.status(500).json({ error: err });
    else res.status(200).end();
  })
    .then()
    .catch(err => console.log("delete-feedback-err", err));
}

export function updateFeedback(req, res) {
  const { fb_id } = req.params;
  const { new_content } = req.body;

  if (!fb_id)
    return res.status(403).json({ error: "Missing required data field(s)." });

  return FeedbackService.updateFeedback({
    id: fb_id,
    content: new_content || ""
  })
    .then(() => res.status(200).end())
    .catch(err => console.log("update-feedback-error", err));
}
