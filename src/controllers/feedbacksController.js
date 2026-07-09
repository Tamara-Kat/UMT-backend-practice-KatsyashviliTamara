import {
  createFeedback,
  getAllFeedbacks,
} from "../services/feedbacksService.js";

export async function getFeedbacksController(req, res) {
  const feedbacks = await getAllFeedbacks();

  res.status(200).json(feedbacks);
}

export async function createFeedbackController(req, res) {
  const feedback = await createFeedback(req.body);

  res.status(201).json(feedback);
}