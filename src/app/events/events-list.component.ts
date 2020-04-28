import { Component} from '@angular/core';

@Component({
  selector: 'app-events-list',
  template: `
  <div>
  <h1>Upcoming Events</h1>
  <hr>
  <app-event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></app-event-thumbnail>
</div>`
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/12/2020',
    time: '10:00am',
    price: 599.99,
    imgUrl: './../../assets/images',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
  handleEventClicked(data: any) {
    console.log('received: ', data);
  }

}
