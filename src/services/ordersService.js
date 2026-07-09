import { Order } from "../models/Order.js";

export async function getAllOrders() {
  return Order.findAll({
    order: [["createdAt", "DESC"]],
  });
}

export async function createOrder(data) {
  return Order.create(data);
}