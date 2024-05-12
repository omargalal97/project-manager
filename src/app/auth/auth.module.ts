import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ChangePasswordComponent
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,SharedModule,HttpClientModule
  ],
  providers:[
    AuthService
  ],
  providers:[AuthService]
})
export class AuthModule { }
