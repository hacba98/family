const validator = require("validator");
const { isEmpty } = require("./utils");

/**
 * @param body register request body
 */
module.exports = function validateRegisterInput(body) {
  // body: register request body content: name, email, password, password2
  var err = {};
  email = isEmpty(body.email) ? "" : body.email;
  password = isEmpty(body.password) ? "" : body.password;

  // Constrait: email must be in format
  if (!validator.isEmail(email)) {
    err.email = "Email is not in valid format.";
  }

  // Constrait: length of password range (6..28)
  if (!validator.isLength(password, { min: 6, max: 28 })) {
    err.password = "Password must have from 6 to 28 characters.";
  }

  // Constrait: password must have at least one digit and one letter and do not have special characters.
  if (
    validator.isAlpha(password) ||
    validator.isNumeric(password) ||
    !validator.isAlphanumeric(password)
  ) {
    err.password =
      "Password must have at least one digit and one letter and do not have special characters.";
  }

  //Constrait: email and password must not be empty.
  if (isEmpty(email)) {
    err.email = "Email field is required.";
  }
  if (isEmpty(password)) {
    err.password = "Password field is required.";
  }

  return {
    err,
    isValid: isEmpty(err)
  };
};
