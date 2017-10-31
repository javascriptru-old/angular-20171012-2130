export class AuthService {
  private auth = false;

  constructor() { }

  login(email: string, password: string){
    console.info('%cEmail: ' + email, 'color: white; background-color: black; padding: 2px');
    console.info('%cPassword: ' + password, 'color: white; background-color: black; padding: 2px');
    this.auth = true;
    return this.isAuth();
  }

  isAuth() {
    // return this.auth;
    return true;
  }
}
