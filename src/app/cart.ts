export interface Cart {
  numOfCartItems: number;
  data: Data;
}

interface Data {
  totalCartPrice: number;
  _id:string
  products: Products[];
}
interface Products {
  count: number;
  price: number;
  product: productDetails;
}
interface productDetails {
  id: string;
  title: string;
  imageCover: string;
}
