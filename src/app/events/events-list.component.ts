import { NotificationService } from './shared/notification.service';
import { EventService } from './shared/events.service';
import { Component, OnInit } from '@angular/core';
@Component({
  template: ` <div>
    <h1>Upcoming Events</h1>
    <hr />
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <app-event-thumbnail
        (click)="handleThumbnailClick(event.name)"
          [event]="event"
        >
        </app-event-thumbnail>
      </div>
    </div>
  </div>`,
})
export class EventsListComponent implements OnInit {
  events: any;
  constructor(private eventService: EventService, private notifyService: NotificationService) {
  }
  ngOnInit() {
    this.events = this.eventService.getEvents().subscribe(events => {this.events = events; });
  }
  handleThumbnailClick(eventName: string) {
    this.notifyService.showSuccess(eventName, 'Success');
  }
}
