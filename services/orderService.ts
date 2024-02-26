import { Order } from "@/schemas/order";
import axiosInstance from "@/utils/axiosInstance";

export const getCustomerOrders = async (): Promise<Order[]> => (await (await axiosInstance()).get("/orders")).data;

export const makeOrderFromCart = async (): Promise<Order> =>
  (await (await axiosInstance()).post("/cart/create_order")).data;
