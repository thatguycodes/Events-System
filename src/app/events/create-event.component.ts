import { IEvent } from './shared/event.model';
import { EventService } from './shared/events.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
  em {float: right; color: #E05C65; padding-left: 10px;}
  .error input { background-color: #e3c3c5;}
  .error ::-webkit-input-placeholder {color: #999;}
  .error ::-moz-placeholder {color: #999;}
  .error ::-ms-input-placeholder { color: #999;}
  `]
})
export class CreateEventComponent implements OnInit {
  isDirty = true;
  newEvent: any;
  constructor(private router: Router, private event: EventService) {}
  ngOnInit() {}
  cancel() {
this.router.navigate(['/events']);
  }
saveEvent(formValues: IEvent) {
  this.event.saveEvent(formValues);
  this.isDirty = false;
  this.router.navigate(['/events']);
}
}
