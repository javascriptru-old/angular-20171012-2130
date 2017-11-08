import { getAge } from './get-age'
import { AbstractControl } from '@angular/forms';

export function ValidateAge(control: AbstractControl) {
  if (!control.value) {
    return null;
  }

  let age = getAge.fromString(control.value);
  if (age < 17 || age > 200) {
    return { validAge: {message: 'Неверная дата'} };
  }

  return null;
}
