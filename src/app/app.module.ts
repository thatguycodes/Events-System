import { EventService } from './events/shared/events.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './nav/navbar.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsAppComponent } from './events-app.component';
import {EventThumbnailComponent} from './events/event-thumbnail.componet';

@NgModule({
  declarations: [
   EventsAppComponent,
   EventsListComponent,
   EventThumbnailComponent,
   NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
