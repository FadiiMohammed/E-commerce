export interface Wishlist {
  brand: brand;
  category: category;
  description: string;
  imageCover: string;
  images: string[];
  price: number;
  title: string;
  ratingsAverage: number;
  id: string;
}
interface brand {
  image: string;
  name: string;
}
interface category {
  image: string;
  name: string;
}
