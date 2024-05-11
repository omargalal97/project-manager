import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ILogin, ILoginResponse,IDecryptedToken,IUserDetails } from '../../models/auth';


import { jwtDecode } from 'jwt-decode';
import { FormGroup } from '@angular/forms';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  role: string = ''; // Variable to store user role

  constructor(private _HttpClient: HttpClient){ 
    if (localStorage.getItem('userToken') !== null) {
      this.getProfile();
    }
  }
login(loginData: ILogin): Observable<ILoginResponse> {
  return this._HttpClient.post<ILoginResponse>('Users/Login', loginData);
}
getProfile() {
  let encoded: string | null = localStorage.getItem('userToken');
  if (encoded != null) {
    let decoded: IDecryptedToken = jwtDecode(encoded);
    localStorage.setItem('role', decoded.userGroup);
    localStorage.setItem('userName', decoded.userName);
    this.getRole(); // Get user role
  }
}

// Function to get user role from localStorage
getRole() {
  if (localStorage.getItem('userToken') !== null && localStorage.getItem('role') !== null) {
    this.role = localStorage.getItem('role') ?? '';
  }
}
getCurrentUser(): Observable<IUserDetails> {
  return this._HttpClient.get<IUserDetails>('Users/CurrentUser');
}



//   constructor(private _HttpClient:HttpClient) { }
// ngOnInit(): void {
//   if(localStorage.getItem('tokenOfUserr')!==null){
//     this.tokenDecodeInfo()
//   }
// }
// role : any = ''
// tokenDecodeInfo(){
//   let encoded:any = localStorage.getItem('tokenOfUserr')
//   let decoded:decoded = jwtDecode(encoded)
//   localStorage.setItem('userRole',decoded.userGroup)
//   localStorage.setItem('userName',decoded.userName)
//   this.getRole()
// }
// getRole(){
//   if(localStorage.getItem('tokenOfUserr')!==null&&localStorage.getItem('userRole')!==null){
//     this.role = localStorage.getItem('userRole')
//   }
// }
// loginUser(data:FormGroup):Observable<any>{
// return this._HttpClient.post('Users/Login',data)
// }
}
