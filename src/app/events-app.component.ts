import { Component } from '@angular/core';

@Component({
  selector: 'app-events-app',
  template: `
  <app-nav></app-nav>
<app-events-list></app-events-list>
`
})
export class EventsAppComponent {
  title = 'events-system';
}
