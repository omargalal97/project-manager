import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { ForegtPasswordComponent } from './components/foregt-password/foregt-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '', component: AuthComponent, children:[
  { path: 'forget', component: ForegtPasswordComponent },
  { path: 'reset', component: ResetPasswordComponent }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
