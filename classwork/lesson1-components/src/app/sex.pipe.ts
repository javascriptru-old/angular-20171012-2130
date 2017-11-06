import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex',
  pure: false
})
export class SexPipe implements PipeTransform {

  transform(value: 0|1, args?: any): string {
    if (![0, 1].includes(value)) {
      throw new Error('Unknown sex');
    }
    return value ? 'М' : 'Ж';
  }

}
