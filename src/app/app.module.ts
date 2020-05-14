import { AuthService } from './user/auth.service';
import { UserModule } from './user/index';
import {
  CreateSessionComponent,
  EventsListResolver,
  CreateEventComponent,
  EventDetailsComponent,
  EventService,
  EventsListComponent,
  EventThumbnailComponent,
  SessionListComponent,
  DurationPipe
} from './events/index';
import { EventRouteActivator } from './events/events-details/event-route-activator.service';
import { Error404Component } from './errors/404.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './nav/navbar.component';
import { EventsAppComponent } from './events-app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JQ_TOKEN, CollapsibleWellComponent, SimpleModalComponent } from './common/index';

const jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    {provide: JQ_TOKEN, useValue: jQuery}
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule { }
