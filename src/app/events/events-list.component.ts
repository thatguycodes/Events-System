import { IEvent } from './shared/index';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  template: ` <div>
    <h1>Upcoming Events</h1>
    <hr />
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <app-event-thumbnail
          [event]="event"
        >
        </app-event-thumbnail>
      </div>
    </div>
  </div>`,
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(
    private activeRoute: ActivatedRoute
    ) {
  }
  ngOnInit() {
  this.events = this.activeRoute.snapshot.data.events;
  }
}
