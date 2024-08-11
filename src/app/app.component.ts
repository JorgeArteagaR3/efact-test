import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import Cookies from 'js-cookie';
import { Store } from '@ngrx/store';
import { login } from '../auth.actions';
import { AuthState } from './auth.state';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'efact-test';
  private store = inject(Store);

  constructor(private router: Router) {}

  ngOnInit() {
    const auth = Cookies.get('auth');
    if (auth) {
      const parsedAuth: AuthState = JSON.parse(auth);
      this.store.dispatch(login(parsedAuth));
      this.router.navigate(['/tasks']);
    }
  }
}
