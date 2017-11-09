import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/observable/of';

@Injectable()
export class CustomValidators {

    validationDate(control: FormControl): Observable<null | any> {

        const correctData = new Date().getTime();
        const userData = new Date(control.value).getTime();
        const birthday = (correctData - userData) / (24 * 3600 * 365.25 * 1000);
        if (birthday < 18) {
            return Observable.of({validationDate: {message: 'Добавление пользователей меньше 18 лет запрещено!'}});
        }
        return Observable.of(null);
    }

    validationLength(control: FormControl): Observable<null | any> {
        if (control.value.length <= 2) {
            return Observable.of({validationLength: {message: 'Кол-во символов должно быть не меньше 2'}});
        }
        return Observable.of(null);

    }
}
