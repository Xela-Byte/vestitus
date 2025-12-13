export type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

export type OrderItem = {
  id: string;
  productName: string;
  price: number;
  quantity: number;
  imageUrl: string;
  size?: string;
};

export type OrderActivity = {
  id: string;
  status: OrderStatus;
  timestamp: Date;
  description: string;
  location?: string;
};

export type OrderReview = {
  id: string;
  rating: number;
  comment?: string;
  createdAt: Date;
};

export type Order = {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  items: OrderItem[];
  totalAmount: number;
  createdAt: Date;
  estimatedDelivery?: Date;
  activities?: OrderActivity[];
  currentLocation?: {
    latitude: string;
    longitude: string;
    address?: string;
  };
  driver?: {
    name: string;
    phone: string;
  };
  review?: OrderReview;
};
