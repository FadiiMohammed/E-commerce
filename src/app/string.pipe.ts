import { City } from './cart/city';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string',
})
export class StringPipe implements PipeTransform {
  transform(City: unknown, ...args: unknown[]): unknown {
    return;
  }
}
