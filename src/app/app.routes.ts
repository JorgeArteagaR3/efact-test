import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'sign-in', component: SignInComponent },
  { redirectTo: '/sign-in', pathMatch: 'prefix', path: '' },
];
