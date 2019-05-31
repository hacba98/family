import { Strategy, ExtractJwt } from "passport-jwt";
import mongoose from "mongoose";
import config from "../config";

const User = mongoose.model("User");

const options = {};

options.secretOrKey = config.secretWords;
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

export function passportConfig(passport) {
  passport.use(
    new Strategy(options, (jwt_payload, cb) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return cb(null, user);
          } else return cb(null, false);
        })
        .catch(err => console.log(err));
    })
  );
}
