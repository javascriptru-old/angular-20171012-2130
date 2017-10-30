import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'birthdate'
})
export class BirthdatePipe implements PipeTransform {

    transform(value: number, args?: any): any {
        const date = new Date(value);
        const dateYear = date.getFullYear();
        const dateDay = date.getDate();
        const dateMonth = date.getMonth();

        return `${dateDay}/${dateMonth}/${dateYear}`;
    }

}
