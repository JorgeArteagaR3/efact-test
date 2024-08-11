import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { authReducer } from './auth.reducer';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
