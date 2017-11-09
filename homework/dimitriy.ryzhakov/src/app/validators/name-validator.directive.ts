import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";


@Directive({
  selector: '[appNameValidator][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: NameValidatorDirective,
    multi: true
  }]
})
export class NameValidatorDirective implements Validator {

  constructor() {
  }

  validate(control: FormControl): ValidationErrors | null {
    if (!control.value || control.value.length < 2) {

      return {nameValidator: {error: 'To short'}};
    }
    return null;
  }
}
