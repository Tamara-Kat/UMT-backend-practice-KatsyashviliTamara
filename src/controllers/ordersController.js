import { createOrder, getAllOrders } from "../services/ordersService.js";

export async function getOrdersController(req, res) {
  const orders = await getAllOrders();

  res.status(200).json(orders);
}

export async function createOrderController(req, res) {
  const order = await createOrder(req.body);

  res.status(201).json(order);
}