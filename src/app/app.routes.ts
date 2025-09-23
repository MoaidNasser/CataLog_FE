import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { ActivatioCode } from './components/activatio-code/activatio-code';

export const routes: Routes = [
    { path: "login", component: Login },
    { path: "signup", component: Signup },
    { path: "verify", component:ActivatioCode }

];
