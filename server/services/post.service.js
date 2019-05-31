import Post from "../models/post";

export function addNewRequest(user_id, body) {
  // making request from body input
  //let address = JSON.parse(body.address);
  // const newPost = new Post({
  //   user_id: user_id,
  //   dichvu: { district: address.district, street: address.street },
  //   phone: body.phone,
  //   product_type: body.product_type || "UNKNOWN",
  //   product_name: body.product_name,
  //   description: body.description
  // });
  const newPost = new Post({
    user_id: user_id,
    dichvu: body.dichvu,
    dichvucon: body.dichvucon,
    phone: body.phone,
    user_name: body.user_name,
    address: body.address,
    detail: body.detail,
    date: body.date,
    status: "PROCESSING"
  });

  // get request cordinate
  // TODO
  // newPost.x_cordinate = 0;
  // newPost.y_cordinate = 0;

  return newPost.save();
}

function findPost(post_id) {
  return Post.findById(post_id);
}

export function acceptRequest(post_id, repairman_id, cb) {
  // query db and update status and id
  findPost(post_id)
    .then(result => {
      if (!result) cb(null, null);
      else if (result.status != "PENDING")
        cb("Post is accepted or already completed.");
      else {
        result.status = "PROCESSING";
        result.repairman_id = repairman_id;
        cb(null, result.save());
      }
    })
    .catch(err => cb(err, null));
}

export function completeRequest(post_id) {
  return Post.findByIdAndUpdate(post_id, { status: "COMPLETE" });
}

export function viewAll() {
  return Post.find({}).select(
    "_id user_name dichvu dichvucon address detail date"
  );
}

export function viewDetail(post_id) {
  return Post.findById(post_id);
}
