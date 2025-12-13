import { OrderStatus } from "@/types/order";

export const getStatusColor = (status: OrderStatus) => {
  switch (status) {
    case "pending":
      return "#FF9500";
    case "shipped":
      return "#007AFF";
    case "delivered":
      return "#34C759";
    case "cancelled":
      return "#FF3B30";
    default:
      return "#808080";
  }
};

export const getStatusLabel = (status: OrderStatus) => {
  switch (status) {
    case "pending":
      return "Pending";
    case "shipped":
      return "Shipped";
    case "delivered":
      return "Delivered";
    case "cancelled":
      return "Cancelled";
    default:
      return status;
  }
};
