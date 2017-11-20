import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';

console.log(NG_VALIDATORS);

export function nameValidator(control: FormControl) {
  //control.value
  //if
  // return null || error : {}
  if (!control.value || control.value.length < 5) {
    return { nameValidator: { error: 'Too short' } };
  }

  return null;
}

@Directive({
  selector: '[appNameValidator][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: nameValidator,
    multi: true
  }]
})
export class NameValidatorDirective {
  constructor() { }
}
