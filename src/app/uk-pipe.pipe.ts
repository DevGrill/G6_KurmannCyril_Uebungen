import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ukPipe',
})
export class UkPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    const numberOfDecimals = args[0];
    if (typeof value === 'number' && typeof numberOfDecimals === 'number') {
      const factor = Math.pow(10, numberOfDecimals);
      value = Math.round((value + Number.EPSILON) * factor) / factor;
    }
    return value;
  }
}
