import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  signInForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.pattern('test01'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('test01'),
    ]),
  });
  constructor(private router: Router) {}

  get userName() {
    return this.signInForm.get('userName');
  }

  get password() {
    return this.signInForm.get('password');
  }

  onSubmit() {
    console.log('gaa');
    console.log('username', this.userName?.value);
    if (!this.signInForm.valid) return;

    this.router.navigate(['/tasks']);
  }
}
