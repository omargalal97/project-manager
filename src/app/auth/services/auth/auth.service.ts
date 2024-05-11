import { IChangePass } from './../../models/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private _HttpClient:HttpClient) {
  
 }

changePass(data:IChangePass):Observable<any>{
  return this._HttpClient.put('Users/ChangePassword',data );
}

}
