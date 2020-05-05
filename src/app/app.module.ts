import { AuthService } from './user/auth.service';
import { UserModule } from './user/index';
import {
  EventsListResolver,
  CreateEventComponent,
  EventDetailsComponent,
  EventService,
  NotificationService,
  EventsListComponent,
  EventThumbnailComponent,
} from './events/index';
import { EventRouteActivator } from './events/events-details/event-route-activator.service';
import { Error404Component } from './errors/404.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { NavbarComponent } from './nav/navbar.component';
import { EventsAppComponent } from './events-app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    UserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    NotificationService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
