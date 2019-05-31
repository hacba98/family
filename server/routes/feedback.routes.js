import { Router } from "express";
import passport from "passport";

const router = new Router();

import * as FeedbackController from "../controllers/feedback.controller";

router.route("/giveFB/:username").post(
  //passport.authenticate("jwt", { session: false }),
  FeedbackController.postNewFeedback
);

router.route("/viewFB").get(
  //passport.authenticate("jwt", { session: false }),
  FeedbackController.viewFeedback
);

export default router;

// router
//   .route("/deleteFB/:username/:fb_id")
//   .delete(
//     passport.authenticate("jwt", { session: false }),
//     FeedbackController.deleteFeedback
//   );

// router
//   .route("/update/:fb_id")
//   .post(
//     passport.authenticate("jwt", { session: false }),
//     FeedbackController.updateFeedback
//   );
