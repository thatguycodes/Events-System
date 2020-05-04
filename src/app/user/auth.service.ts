import { IUser } from './user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  currentUser: IUser;
  updateProfile(formValues: {firstName: string, lastName: string; }) {
    this.currentUser.firstName = formValues.firstName;
    this.currentUser.lastName = formValues.lastName;
  }
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
