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
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  signInForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router) {}

  get title() {
    return this.signInForm.get('username');
  }

  get password() {
    return this.signInForm.get('password');
  }

  onSubmit() {
    console.log('gaa');
    if (!this.signInForm.valid) return;
    this.router.navigate(['/tasks']);
  }
}
