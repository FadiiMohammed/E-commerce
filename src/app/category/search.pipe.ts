import { Pipe, PipeTransform } from '@angular/core';
import { CategoryData } from './category';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(category: CategoryData[], term: string): CategoryData[] {
    return category.filter((category) =>
      category.name.toLowerCase().includes(term.toLowerCase())
    );
  }
}
