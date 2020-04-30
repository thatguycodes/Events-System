import { CreateEventComponent } from './../create-event.component';
import { EventService } from './../shared/events.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, CanDeactivate } from '@angular/router';

@Injectable()
export class EventRouteActivator implements CanActivate, CanDeactivate<CreateEventComponent> {

  constructor(private eventService: EventService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params.id);
    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
  canDeactivate(component: CreateEventComponent): boolean {
    if (component.isDirty) {
      return window.confirm('You have not saved your changes, are you really sure you want to cancel?');
    }
    return true;
  }
}
