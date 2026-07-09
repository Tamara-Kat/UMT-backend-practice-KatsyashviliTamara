import { Feedback } from "../models/Feedback.js";

export async function getAllFeedbacks() {
  return Feedback.findAll({
    order: [["createdAt", "ASC"]],
  });
}

export async function createFeedback(data) {
  return Feedback.create(data);
}