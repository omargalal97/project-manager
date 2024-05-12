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
