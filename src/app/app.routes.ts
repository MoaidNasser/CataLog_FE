import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { ActivatioCode } from './components/activatio-code/activatio-code';
import { ImageTemplate } from './components/image-template/image-template';

export const routes: Routes = [
    { path: "", component: Login },
    { path: "login", component: Login },
    { path: "signup", component: Signup },
    { path: "verify", component: ActivatioCode },
    { path: "cats", component: ImageTemplate }


];
