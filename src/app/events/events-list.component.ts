import { EventService } from "./shared/events.service";
import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  template: ` <div>
    <h1>Upcoming Events</h1>
    <hr />
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <app-event-thumbnail
          (eventClick)="handleEventClicked($event)"
          [event]="event"
        >
        </app-event-thumbnail>
      </div>
    </div>
  </div>`,
})
export class EventsListComponent {
  events: any = [];
  constructor( eventService: EventService) {
    this.events = eventService.getEvents();
  }
  handleEventClicked(data) {
    console.log('Yep I work');
  }
}
