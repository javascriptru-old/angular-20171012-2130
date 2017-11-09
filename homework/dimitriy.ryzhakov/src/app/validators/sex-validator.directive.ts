import { Directive } from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appSexValidator][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SexValidatorDirective,
    multi: true
  }]
})
export class SexValidatorDirective implements Validator{

  constructor() { }
  validate(control: FormControl): ValidationErrors {
    if (!control.value) {
      return { sexValidator: {error: 'Select your gender'}};
    }
    return null;
  }

}
