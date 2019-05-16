import { Router } from "express";
import passport from "passport";
const router = new Router();

import * as PostController from "../controllers/post.controller";

// POST /post/request/:user_id
router
  .route("/request/:user_id")
  .post(
    passport.authenticate("jwt", { session: false }),
    PostController.postRequest
  );

// GET /post/accept/:post_id/:repairman_id
router
  .route("/accept/:post_id/:repairman_id")
  .get(
    passport.authenticate("jwt", { session: false }),
    PostController.acceptRequest
  );

// GET request - get all basic information
router.route("/get").get(PostController.getRequests);

// GET request - get detail information
router.route("/getDetail/:post_id").get(PostController.getDetail);

// GET complete request - called when done
router
  .route("/complete/:post_id")
  .get(
    passport.authenticate("jwt", { session: false }),
    PostController.completeRequest
  );

// Xóa request

// Sửa request

export default router;
