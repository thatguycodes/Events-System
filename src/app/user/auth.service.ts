import { IUser } from './user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  currentUser: IUser;
  loginService(userName: string, password: string) {
    return this.currentUser = {
      firstName: 'John',
      lastName: 'Papa',
      id: 1,
      userName: 'jp@gmail.com'
    };
  }
  isAuthenticated() {
    return !!this.currentUser;
  }
}
