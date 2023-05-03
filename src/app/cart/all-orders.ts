import { Product } from './../product';
export interface AllOrders {
  shippingAddress: shippingAddress;
  totalOrderPrice: number;
  taxPrice: number;
  user: user;
  cartItems: cartItems[];
}
interface cartItems {
  price: number;
  product: product;
}
interface product {
  imageCover: string;
  title: string;
}
interface shippingAddress {
  details: string;
  phone: string;
  city: string;
}
interface user {
  name: string;
  email: string;
  phone: string;
}
