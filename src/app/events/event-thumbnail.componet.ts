import { IEvent } from './shared/index';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  template: `
  <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
  <h2 [ngStyle]="getTitleStyle(event.format)">{{ event?.name}}</h2>
  <span [ngSwitch]="event.format">
      <span *ngSwitchCase="'InPerson'" class="label label-warning">In-Person</span>
      <span *ngSwitchCase="'Online'" class="label label-warning">Online</span>
      <span *ngSwitchDefault class="label label-warning">TBD</span>
    </span>
  <div>Date: {{ event?.date }}</div>
  <div>Time: {{ event?.time }}</div>
  <div>Price: \${{ event?.price }}</div>
  <div  *ngIf="event.location">
      <span>Location: {{event?.location?.address}}</span>
      <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div *ngIf="event.onlineUrl">
      Online URL: {{event?.onlineUrl}}
    </div>
  </div>`,
  styles: [
    `
      .thumbnail {
        min-height: 225px!important;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
  getTitleStyle(eventFormat: string): any {
    if (eventFormat === 'InPerson') {
      return {color: 'green'};
    }

    if (eventFormat === 'Online') {
      return {color: 'red'};
    }

    return {color: '#aaa'};
  }
}
