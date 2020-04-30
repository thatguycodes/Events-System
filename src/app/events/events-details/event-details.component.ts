import { EventService } from './../shared/events.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
  .container { padding-left: 10px; padding-right: 20px;}
  .event-image {height: 100px;}
  `]
})
export class EventDetailsComponent implements OnInit {
  event: any;
  constructor(private eventService: EventService, private activedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.event = this.eventService.getEvent(+this.activedRoute.snapshot.params.id);
  }
}
