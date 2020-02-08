export class User {
  name: string;
  email: string;
  password: string;
  type: string;

  constructor(email:string, password:string){
    this.email = email;
    this.password = password;
  }
}
