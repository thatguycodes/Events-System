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

@NgModule({
  declarations: [
   EventsAppComponent,
   EventsListComponent,
   EventThumbnailComponent,
   NavbarComponent,
   EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot()
  ],
  providers: [EventService, NotificationService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
