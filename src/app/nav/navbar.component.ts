import { AuthService } from './../user/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .nav.navbar {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
      li > a.active {
        color: #f97924;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor(public auth: AuthService) {}
  ngOnInit() {
  }
}
