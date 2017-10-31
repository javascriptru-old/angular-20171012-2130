import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: Date, args?: any): any {
    const date = new Date(value);
    const dateYear = date.getFullYear();
    const dateDay = date.getDate();
    const dateMonth = date.getMonth();

    return `${value.getDay()}.${value.getMonth()}.${value.getFullYear()}`;
  }

}
