import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{ path: '', component: AuthComponent ,children:[
  
]}
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: AuthComponent , children:[
    {path:'changePass' ,component:ChangePasswordComponent, title: 'change-password'},
    { path: 'register', component: RegisterComponent, title: 'Register' },
    {path: 'login', component: LoginComponent, title: 'Login'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
