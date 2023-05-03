import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartFilter',
})
export class CartFilterPipe implements PipeTransform {
  transform(value: any[], ...args: unknown[]): any[] {
    return value.filter((product) => product.count != 0);
  }
}
