import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dollar'})
export class DollarPipe implements PipeTransform {
  transform(value: number, locale?: string) {
      if(value === 0) return value;
      return value ? new Intl.NumberFormat(locale, {  currency: 'USD' }).format(Number(value)) : null;
  }
}
