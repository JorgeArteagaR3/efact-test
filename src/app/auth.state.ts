import { IUser } from './user.model';

// src/app/auth/auth.state.ts
export interface AuthState {
  user: IUser;
  isAuthenticated: boolean;
}

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
};
