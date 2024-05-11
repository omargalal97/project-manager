
export interface ILogin {
    email: string;
    password: string;
  }
  
  export interface ILoginResponse {
    token: string;
    expiresIn: string;
  }
  export interface IDecryptedToken {
    role: string[];
    userName: string;
    userEmail: string;
    userGroup: string;
    iat: number;
    exp: number;
  }
  export interface IUserDetails {
    id: number;
    userName: string;
    email: string;
    country: string;
    phoneNumber: string;
    imagePath: string;
    creationDate: string;
    modificationDate: string;
    group: IUserRole
  }  
  export interface IUserRole {
    id: number;
    name: string;
    creationDate: string;
    modificationDate: string
  }

// export interface decoded {
//     userId: number
//     roles: string[]
//     userName: string
//     userEmail: string
//     userGroup: string
//     iat: number
//     exp: number
//   }
  