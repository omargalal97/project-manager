export interface IForget {
    email:string;
}
export interface IReset {
    email:string;
    password: "string",
    confirmPassword: string,
    seed: string
}
interface IForgetRes {
    message: string;
  }
  