import { AuthService } from './../../services/auth/auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foregt-password',
  templateUrl: './foregt-password.component.html',
  styleUrls: ['./foregt-password.component.scss']
})
export class ForegtPasswordComponent {
  forgetResMes:string='';
  forgetPassForm:FormGroup=new FormGroup({
    email:new FormControl(null, [Validators.required, Validators.email])
  })

  constructor(private AuthService:AuthService,private router:Router){}

  onForgetPass(){
    console.log(this.forgetPassForm);
    
    this.AuthService.forgetPassword(this.forgetPassForm.value).subscribe({
      next:(res)=>{
        console.log(res.message);
        this.forgetResMes = res.message;
        setTimeout(() => {
        this.router.navigateByUrl("/auth/reset");
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
