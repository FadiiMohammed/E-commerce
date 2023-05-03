export interface Product {
  existInWishlist: boolean;
  category: Category;
  imageCover: string;
  price: number;
  title: string;
  ratingsAverage: number;
  id: string;
  description: string;
  images: string[];
}
interface Category {
  name: string;
}
