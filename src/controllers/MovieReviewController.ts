import Reviews from "../models/MovieReviewModel";
import { Request, Response } from "express";

function validId(id) {
  if (id || !isNaN(id)) return true;

  return false;
}

class MovieReviewController {
  public async getAll(req: Request, res: Response) {
    let { id: movieId } = req.params;
    movieId = String(movieId);

    if (!validId(movieId)) return res.status(404).json({ success: false });

    try {
      const reviews = await Reviews.findAll({
        where: {
          movieId: movieId,
        },
      });
      res.status(200).json({ success: true, reviews: reviews });
    } catch (error) {
      res.status(404).json({ success: false, error });
    }
  }

  public async create(req: Request, res: Response) {
    const { title, description, movieId } = req.body;

    if (!title || !description) return res.status(400).json({ success: false });

    try {
      await Reviews.create({
        title,
        description,
        movieId,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false, error });
    }
  }

  public async deleteOne(req: Request, res: Response) {
    let { id } = req.params;

    if (!validId(id)) return res.status(404).json({ success: false });

    try {
      const review = await Reviews.findOne({ where: { id } });

      if (!review) return res.status(404).json({ success: false });

      await review?.destroy();

      res.status(200).json({ success: true, review });
    } catch (error) {
      return res.status(404).json({ success: false, error });
    }
  }
}

const reviewController = new MovieReviewController();

export default reviewController;
