import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavComponent } from './nav/nav.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsAppComponent } from './events-app.component';
import {EventThumbnailComponent} from './events/event-thumbnail.componet';

@NgModule({
  declarations: [
   EventsAppComponent,
   EventsListComponent,
   EventThumbnailComponent,
   NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
