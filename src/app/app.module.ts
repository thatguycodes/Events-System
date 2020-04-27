import { EventsListComponent } from './events/events-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import {EventThumbnailComponent} from './events/event-thumbnail.componet';

@NgModule({
  declarations: [
   EventsAppComponent,
   EventsListComponent,
   EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
