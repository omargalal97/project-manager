import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IForget, IReset } from '../../models/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private _httpclient:HttpClient) { }

forgetPassword(data:IForget):Observable<any>{
return this._httpclient.post<IForget>('https://upskilling-egypt.com:3003/api/v1/Users/Reset/Request', data)
}

resetPasssword(data:IReset):Observable<any>{
  return this._httpclient.post<IForget>('https://upskilling-egypt.com:3003/api/v1/Users/Reset', data)
  }

}
