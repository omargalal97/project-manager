import { Component, OnInit } from '@angular/core';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  files: File[] = [];
  imgSrc: any;

  registerForm = new FormGroup({
    userName: new FormControl(null, [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern(/^[A-Za-z]+\d+$/),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]), //egypt number
    country: new FormControl(null, [Validators.required]),
    profileImage: new FormControl(null),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/),
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      this.passwordMatchValidator(), // Pass the reference to the validator function
    ]),

  });
  constructor( private _AuthService:AuthService) { }

  ngOnInit() {
  }

  passwordMatchValidator():ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null =>{
     const password=control.get('password');
     const confirmPassword=control.get('confirmPassword');
     const ValidationError={'confirmPassMismatchPass':{'value':confirmPassword}}
     if (password?.value!==confirmPassword?.value) {
       return ValidationError;
     }else return null
    }
   }

   onRegister(data: FormGroup) {
    console.log("data",data);

    let myData = new FormData();

    myData.append('profileImage', this.imgSrc);

    Object.entries(data.value).forEach(([key, value]) => {
      if (value) {
        myData.append(key, value as string);
      }
    });

    this._AuthService.register(myData).subscribe({
      next: (res) => {
        console.log(res);
        // this._NotifyService.Success("Data is Sent Successfully")
      },
      error:(errRes:HttpErrorResponse)=>{
        const errMsg=errRes.error.message
        // this._NotifyService.ServerError(errMsg)
      }
    });
  }

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files[0];
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  get userName() {
    return this.registerForm.get('userName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get country() {
    return this.registerForm.get('country');
  }
  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }


}
