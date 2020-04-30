import { EventRouteActivator } from "./events/events-details/event-route-activator.service";
import { Error404Component } from "./errors/404.component";
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/events-details/event-details.component';
import { NotificationService } from './events/shared/notification.service';
import { EventService } from './events/shared/events.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { NavbarComponent } from './nav/navbar.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsAppComponent } from './events-app.component';
import {EventThumbnailComponent} from './events/event-thumbnail.componet';
import {RouterModule } from '@angular/router';
import { appRoutes } from './route';

@NgModule({
  declarations: [
   EventsAppComponent,
   EventsListComponent,
   EventThumbnailComponent,
   NavbarComponent,
   EventDetailsComponent,
   CreateEventComponent,
   Error404Component
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, NotificationService, EventRouteActivator],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
