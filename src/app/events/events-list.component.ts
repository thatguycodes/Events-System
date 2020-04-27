import { Component} from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.componet.html'
})
export class EventsListComponent {
  events = {
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

}
