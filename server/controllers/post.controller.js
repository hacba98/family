import * as PostService from "../services/post.service";
import Post from "../models/post";

export function postRequest(req, res) {
  const { user_id } = req.params;
  const { address, product_type, product_name, description, phone } = req.body;

  // check if provided enough data
  if (!user_id || !address || !product_name || !description || !phone)
    return res.status(403).json({ error: "Missing required data field(s)." });

  return PostService.addNewRequest(user_id, req.body)
    .then(saved => res.status(200).json({ data: saved }))
    .catch(err => {
      console.log("post-request-error", err);
      res.status(500).json({ error: err });
    });
}

export function acceptRequest(req, res) {
  const { post_id, repairman_id } = req.params;

  // check data
  if (!post_id || !repairman_id)
    return res.status(403).json({ error: "Missing required data field(s)." });

  return PostService.acceptRequest(post_id, repairman_id, (err, result) => {
    if (err) res.status(500).json({ error: err });
    else if (!result)
      res.status(404).json({ error: "Post is no longer existed." });
    else res.status(200).end();
  });
}

export function getRequests(req, res) {
  // TODO get all
  return PostService.viewAll()
    .then(result => res.status(200).json({ data: result }))
    .catch(err => console.log(err));
}

export function getDetail(req, res) {
  const { post_id } = req.params;

  return PostService.viewDetail(post_id)
    .then(result => res.status(200).json({ data: result }))
    .catch(err => res.status(500).json({ error: err }));
}

export function completeRequest(req, res) {
  const { post_id } = req.params;
  return PostService.completeRequest(post_id)
    .then(() => res.status(200).end())
    .catch(err => res.status(500).end());
}
