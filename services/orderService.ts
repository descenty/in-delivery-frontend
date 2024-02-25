import { Order } from "@/schemas/order";
import axiosInstance from "@/utils/axiosInstance";

export const getCustomerOrders = async (): Promise<Order[]> => (await (await axiosInstance()).get("/orders")).data;
