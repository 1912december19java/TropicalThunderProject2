export class EditUser {
  name: string;
  Email: string;
  Password: string;
  
  constructor(name: string, email: string, password: string, type: string) {
    this.name= name;
    this.Email = email;
    this.Password = password;
  }
}
