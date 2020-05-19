import { EventService } from './../events/shared/events.service';
import { ISession } from './../events/shared/event.model';
import { AuthService } from './../user/auth.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
    .modal .show {
      display: block;
    }
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
  searchTerm: string;
  foundSessions: any;
  toggle = false;
  showModal: boolean;
  constructor(public auth: AuthService, private eventService: EventService) {}
  ngOnInit() {
  }
  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe((sessions: ISession[]) => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }
  show() {
    this.toggle = !this.toggle;
  }
}
