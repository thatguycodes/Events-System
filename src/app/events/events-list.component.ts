import { EventService } from './shared/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
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
  events: any[];
  constructor(private eventService: EventService) {
  }
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
