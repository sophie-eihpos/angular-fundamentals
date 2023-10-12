import { Component } from '@angular/core';

@Component({
  selector: 'events-app-root',
  template: `
  <nav-bar></nav-bar>
    <events-list></events-list>
    <img src="/assets/images/basic-shield.png" />
  `
})
export class EventsAppComponent {
  title = 'ng fundamentals';
}
