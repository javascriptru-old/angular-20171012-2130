import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fields: this.formBuilder.array([
        ['First Name', [Validators.minLength(2)]], 
        ['Last Name', [Validators.minLength(2)]], 
        ['Gender', [Validators.required]], 
        ['Age', [ageValidator(18)]], 
        ['Email', Validators.email]
      ])
    });

    this.regForm.statusChanges.subscribe(status => {
      console.log(status, this.regForm.errors);
    });
  }
}

function ageValidator(minAge: number) {
  return function(formControl: FormControl) {
    if (!Number(formControl.value) || Number(formControl.value) < minAge) {
      return { ageValidator: { message: 'Возраст должен быть больше 18'}}
    }
    return null;
  }
}
