import User from "../models/user";
import sanitizeHtml from "sanitize-html";
import bcryptjs from "bcryptjs";
import * as jwt from "jsonwebtoken";

import config from "../config";
/**
 * Service function for getting user information
 * @param {any} param Parameter for using in search queries
 * @param {String} searchOpts Options for search: "_id" or "email". Default: "_id"
 * @param {String} resultOpts Options for query result. Default: "name email usercode"
 */
export function getUser(
  param,
  searchOpts = "_id",
  resultOpts = "_id username phone"
) {
  if (searchOpts == "_id") return User.findById(param).select(resultOpts);
  else if (searchOpts == "username")
    return User.findOne({ username: param }).select(resultOpts);
  else return new Error("Invalid Search query options.");
}

/**
 * Service function add new user to database
 * @param {Object} body Request body object: MUST contain name, email, password.
 */
export async function addUser(body, role) {
  const newUser = new User({
    username: body.username,
    password: body.password,
    phone: body.phone,
    address: body.address,
    fullname: body.fullname,
    isMale: body.isMale
  });

  if (role == "USER") newUser.role = "USER";
  else newUser.role = "ADMIN";

  // Sanitialize raw data
  newUser.username = sanitizeHtml(newUser.username);
  newUser.phone = sanitizeHtml(newUser.phone);
  newUser.password = sanitizeHtml(newUser.password);
  newUser.address = sanitizeHtml(newUser.address);
  newUser.fullname = sanitizeHtml(newUser.fullname);

  // Encrypted user password
  await bcryptjs
    .genSalt(config.passwordLength)
    .then(async salt => {
      await bcryptjs
        .hash(newUser.password, salt)
        .then(hash => (newUser.password = hash))
        .catch(err => console.log("error-bcryptHashPassword:", err));
    })
    .catch(err => console.log("error-bcryptGenSalt:", err));

  // Save to DB
  let err,
    saved = null;
  await newUser
    .save()
    .then(result => (saved = result))
    .catch(error => (err = error));

  return { err, saved };
}

/**
 * Service function sign token for user when login
 * @param {Object} body Request body object: MUST contain email, password.
 */
export async function signToken(body) {
  const { username, password } = body;
  let userpassword,
    userId = null;

  // Get user from DB
  await getUser(username, "username", "_id password")
    .then(result => {
      if (result) {
        userpassword = result.password;
        userId = result._id;
      }
    })
    .catch(err => console.log("error-password", err));

  if (!userpassword)
    return { err: "User not found.", userId: null, signedToken: null };

  // sign token
  let err,
    signedToken = null;

  await bcryptjs.compare(password, userpassword).then(async success => {
    if (success) {
      const key = config.secretWords;
      const duration = config.tokenDuration;
      const payload = {
        id: userId,
        username: body.username
      };

      // sign token
      signedToken = await jwt.sign(payload, key, { expiresIn: duration });
    } else err = "Access denied. User or password is not correct.";
  });

  return { err, signedToken, userId };
}
