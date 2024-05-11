import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ForegtPasswordComponent } from './components/foregt-password/foregt-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';



@NgModule({
  declarations: [
    AuthComponent,
    ForegtPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers:[
    AuthService
  ]
})
export class AuthModule { }
