import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IVerify } from '../../models/auth';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss'],
})
export class VerifyAccountComponent {

  constructor(private _AuthService: AuthService,
    private _ToastrService: ToastrService,
    private _Router: Router
  ) {}

  verifyForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    code: new FormControl(null, [
      Validators.required,
      Validators.maxLength(4),
      Validators.minLength(4),
    ]),
  });

  onVerifyAccount(verificationForm: FormGroup) {
    this._AuthService.verify(verificationForm.value).subscribe({
      next: (res) => { console.log(res) },
      error: (error: HttpErrorResponse) => this._ToastrService.error(error.error.message, 'Error'),
      complete: () => {
        this._ToastrService.success('Account Verified Successfully', 'Success');
        this._Router.navigate(['/login'])
      }
    })
  }
}
