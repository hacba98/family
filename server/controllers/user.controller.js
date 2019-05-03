import * as UserServices from "../services/user.service";

/**
 * Register new user
 * @param req
 * @param res
 * @return void
 */
export async function registerUser(req, res) {
  const { username, password, phone } = req.body;

  // Checking empty params
  if (!username || !password || !phone)
    return res.status(403).json({ errors: "Missing required data field(s)." });

  // checking if user already existed
  let flag = null;
  await UserServices.getUser(username, "username")
    .then(user => {
      if (user) flag = "This username is already existed";
    })
    .catch(err => console.log(err));
  if (flag) return res.status(403).json({ errors: flag });

  // processing data and save to database
  let { err, saved } = await UserServices.addUser(req.body);
  if (err) return res.status(500).json({ errors: err });
  return res.status(200).json({ data: saved });
}

/**
 * Login user
 * @param {Request} req
 * @param {Respond} res
 * @return void
 */
export async function loginUser(req, res) {
  // Check empty fields
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(403).json({ errors: "Missing required field(s)." });

  let { err, signedToken, userId } = await UserServices.signToken(req.body);
  if (err) return res.status(500).json({ errors: err });
  return res
    .status(200)
    .json({ data: { id: userId, authorization: "Bearer " + signedToken } });
}
