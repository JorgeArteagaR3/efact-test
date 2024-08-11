import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from '../auth.state';
import { CommonModule } from '@angular/common';
import { logout } from '../../auth.actions';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private store = inject(Store);

  authState$?: Observable<AuthState>;

  auth?: AuthState;

  constructor(private router: Router) {
    this.authState$ = this.store.pipe(select('auth'));
  }

  ngOnInit() {
    this.authState$?.subscribe((data) => (this.auth = data));
  }

  logout() {
    this.store.dispatch(logout());
    this.router.navigate(['/sign-in']);
    Cookies.remove('auth');
  }
}
