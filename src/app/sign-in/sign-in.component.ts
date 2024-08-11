import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthState } from '../auth.state';
import { select, Store } from '@ngrx/store';
import { login } from '../../auth.actions';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  private store = inject(Store);
  formSubmitted = false;

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

  authState$?: Observable<AuthState>;

  constructor(private router: Router) {
    this.authState$ = this.store.pipe(select('auth'));
  }

  get userName() {
    return this.signInForm.get('userName');
  }

  get password() {
    return this.signInForm.get('password');
  }

  login() {
    const authValues: AuthState = {
      user: this.userName?.value || '',
      isAuthenticated: true,
    };

    this.store.dispatch(login(authValues));
    this.router.navigate(['/tasks']);
    Cookies.set('auth', JSON.stringify(authValues));
  }

  onSubmit() {
    this.formSubmitted = true;
    if (!this.signInForm.valid) return;
    this.login();
  }
}
