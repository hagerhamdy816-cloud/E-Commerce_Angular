import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private _Router: Router) {

  }
  registerForm = new FormGroup({
    firstName: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required, Validators.pattern(/^[A-Z][a-z]{3,10}$/)]),
    lastName: new FormControl(null, [Validators.minLength(3), Validators.maxLength(10), Validators.required, Validators.pattern(/^[A-Z][a-z]{3,10}$/)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    birthDate: new FormControl(null,Validators.required),
    password: new FormControl(null),

  })


  submitForm(data: any) {
    console.log(data)
    this._Router.navigate(['/logIn'])
  }
}