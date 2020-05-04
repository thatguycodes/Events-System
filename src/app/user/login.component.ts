import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component
({
  templateUrl: './login.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
  `]
})
export class LoginComponent {
  constructor(private auth: AuthService, private router: Router) {}
  userName: string;
  password: string;
  mouseoverLogin: any;
  login(formValues: { userName: string; password: string; }) {
    this.auth.loginService(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }
cancel() {
  this.router.navigate(['events']);
}
}
