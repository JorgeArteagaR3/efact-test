import { createAction, props } from '@ngrx/store';
import { AuthState } from './app/auth.state';

export const login = createAction('[Auth] Login', props<AuthState>());

export const logout = createAction('[Auth] Logout');
