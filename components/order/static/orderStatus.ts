/*
PENDING = "pending"
    CONFIRMED = "confirmed"
    CANCELLED = "cancelled"
    DELIVERED = "delivered"
    REFUNDED = "refunded"
*/

export enum OrderStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  CANCELLED = "cancelled",
  DELIVERED = "delivered",
  REFUNDED = "refunded",
}

export type OrderStatusColor = {
  [key in OrderStatus]: "primary" | "default" | "secondary" | "success" | "warning" | "danger";
};

export const orderStatusColor: OrderStatusColor = {
  [OrderStatus.PENDING]: "default",
  [OrderStatus.CONFIRMED]: "secondary",
  [OrderStatus.CANCELLED]: "danger",
  [OrderStatus.DELIVERED]: "success",
  [OrderStatus.REFUNDED]: "warning",
};

export type OrderStatusText = {
  [key in OrderStatus]: string;
};

export const orderStatusText: OrderStatusText = {
  [OrderStatus.PENDING]: "Ожидает подтверждения",
  [OrderStatus.CONFIRMED]: "Принят",
  [OrderStatus.CANCELLED]: "Отменен",
  [OrderStatus.DELIVERED]: "Доставлен",
  [OrderStatus.REFUNDED]: "Возвращен",
};
