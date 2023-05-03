import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTerm',
})
export class SearchTermPipe implements PipeTransform {
  transform(products: Product[], term: string): Product[] {
    return products.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
import { Product } from './product';
