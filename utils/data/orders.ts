import { Order } from "@/types/order";

export const mockOrder: Order = {
  id: "1",
  orderNumber: "ORD-2025-001",
  status: "shipped",
  items: [
    {
      id: "1",
      productName: "Wireless Headphones",
      price: 15999,
      quantity: 1,
      imageUrl: "https://via.placeholder.com/150",
    },
  ],
  totalAmount: 15999,
  createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
  estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  currentLocation: {
    latitude: "6.4655",
    longitude: "3.4064",
    address: "Ikoyi, Lagos",
  },
  activities: [
    {
      id: "1",
      status: "pending",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      description: "Order placed and confirmed",
      location: "Online Store",
    },
    {
      id: "2",
      status: "shipped",
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
      description: "Package picked up from warehouse",
      location: "Ikoyi Distribution Center",
    },
    {
      id: "3",
      status: "shipped",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      description: "Package in transit",
      location: "Lagos-Ibadan Highway",
    },
  ],
  driver: {
    name: "John Adeleke",
    phone: "+234 801 234 5678",
  },
};
