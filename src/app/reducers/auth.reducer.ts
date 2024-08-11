// src/app/auth/auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from '../auth.state';
import { login, logout } from '../../auth.actions';

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
  })),

  on(logout, (state) => ({
    ...state,
    user: null,
    isAuthenticated: false,
  }))
);
