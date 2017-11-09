import {Directive} from '@angular/core';
import {AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appBirthdatValidator][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: BirthdatValidatorDirective,
    multi: true
  }]
})
export class BirthdatValidatorDirective implements Validator {

  constructor() {
  }

  get_current_age(date): number {
    return ((+new Date().getTime() - +new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
  }

  validate(formControl: AbstractControl): ValidationErrors {
    console.log(this.get_current_age(formControl.value));
    if (this.get_current_age(formControl.value) < 18) {
      return {birthdatValidator: {error: 'You are no 18 years old'}};
    }
    return null;
  }

}
