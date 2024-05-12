export namespace Auth {
  export interface IRegister{
    userName:string,
    email:string,
    country :string,
    phoneNumber :string,
    profileImage:File,
    password:string,
    confirmPassword:string
  }
}

export interface IChangePass {
    oldPassword: string,
    newPassword: string,
    confirmNewPassword: string
}

