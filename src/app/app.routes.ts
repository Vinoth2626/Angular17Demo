import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProgramComponent } from './program/program.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooderComponent } from './fooder/fooder.component';
// import { FooderComponent } from './fooder/fooder.component';

export const routes: Routes = [
  // { path: '', component: FooderComponent },
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'program', component: ProgramComponent },
      { path: 'header', component: HeaderComponent },
      {path:'fooder',component:FooderComponent}
    ],
  },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];
