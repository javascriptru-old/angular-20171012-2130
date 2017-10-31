import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'valoo-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public authForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.authForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.router.navigate(['/mail']);
  }

}
