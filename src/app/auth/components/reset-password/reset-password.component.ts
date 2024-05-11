import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../services/auth/auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
hide:boolean=false; //icon for visibilty of password
resetResMes:string = '';
resetPassForm:FormGroup=new FormGroup({
  email:new FormControl(null),
  seed:new FormControl(null),
  password:new FormControl(null),
  confirmPassword:new FormControl(null)
})

constructor(private AuthService:AuthService, private router:Router){}

onResetPass(){
  this.resetPassForm
  this.AuthService.resetPasssword(this.resetPassForm.value).subscribe({
    next:(res)=>{
      console.log(res);
      this.resetResMes = res.message;
      setTimeout(() => {
      this.router.navigateByUrl("/auth");
      }, 4000);

    },
    error:(err)=>{
      console.log(err);
      
    },
    complete:()=>{

    }
  })
}
}
