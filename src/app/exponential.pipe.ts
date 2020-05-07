import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: number, exponent?:number): number {
    return !exponent?value:Math.pow(value, exponent);
  }

}
