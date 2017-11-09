import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { CustomValidators } from './../../shared/validators.service';
import { AdressBookService } from './../adress-book.service';

function Adres(newAdres) {
  this.email = newAdres.email;
  this.name = newAdres.name;
  this.surname = newAdres.surname;
  this.birthday = newAdres.birthday;
  this.gender = newAdres.gender;
  this.fullName = newAdres.name + ' ' + newAdres.surname;
}

@Component({
  selector: 'app-adress-book-add',
  templateUrl: './adress-book-add.component.html',
  styleUrls: ['./adress-book-add.component.css']
})

export class AdressBookAddComponent implements OnInit {
  form: FormGroup;
  birthday: number;

  constructor(
    private fb: FormBuilder,
    private customValidators: CustomValidators,
    private adressService: AdressBookService
  ) { }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      name: ['', [Validators.required], [this.customValidators.validationLength]],
      surname: ['', [Validators.required], [this.customValidators.validationLength]],
      birthday: ['', [Validators.required], [this.customValidators.validationDate]],
      gender: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.initForm();
  }

  submitForm() {
    if (this.form.valid) {
      const dataForm = new Adres(this.form.value);
      this.adressService.addAdress(dataForm).subscribe(x => {
        alert('Пользователь добавлен');
        this.form.reset();
    });
    }
  }
}
