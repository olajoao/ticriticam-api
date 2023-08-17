import { Router } from "express";
import reviewController from "../controllers/MovieReviewController";
const router = Router();

router.post("/reviews", reviewController.create);
router.get("/reviews/:id", reviewController.getAll);
router.delete("/reviews/:id", reviewController.deleteOne);

export default router;
