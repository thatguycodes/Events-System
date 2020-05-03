import { IEvent,  NotificationService  } from './shared/index';
import { ActivatedRoute } from '@angular/router';
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
  events: IEvent[];
  constructor(
    private notifyService: NotificationService,
    private activeRoute: ActivatedRoute
    ) {
  }
  ngOnInit() {
  this.events = this.activeRoute.snapshot.data.events;
  }
  handleThumbnailClick(eventName: string) {
    this.notifyService.showSuccess(eventName, 'Success');
  }
}
