import { AuthService } from './../../services/auth/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  isLoading: boolean = false;
  apiSuccess: any;
  apiError: any;
  hide: boolean = true;

  constructor(private _AuthService: AuthService) { }

  //changepass form
  changePassForm: FormGroup = new FormGroup({
    oldPassword: new FormControl(null, [Validators.required]),
    newPassword: new FormControl(null, [Validators.required]),
    confirmNewPassword: new FormControl(null, [Validators.required])
  })


  //handle changepass form
  onChangePass(changePassForm: FormGroup) {
    this.isLoading = true;
    this._AuthService.changePass(changePassForm.value).subscribe({
      next: (response) => {
        this.apiSuccess = response.message;
        console.log(response);
        this.isLoading = false;
      }, error: (err) => {
        this.isLoading = false;
        this.apiError = err.error.message;
        console.log(err);
      }
    })

  }


}