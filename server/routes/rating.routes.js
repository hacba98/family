import { Router } from "express";
import passport from "passport";
const router = new Router();

import * as RatingController from "../controllers/rating.controller";

// /rating/getOneRating
router.route("/getOneRating/:post_id").get(RatingController.getRating);

// /rating/getAll
router.route("/getAll/:repairman_id").get(RatingController.getAllRating);

// /rating/rate
router
  .route("/rate/:post_id/:score")
  .get(
    passport.authenticate("jwt", { session: false }),
    RatingController.Rating
  );

export default router;
