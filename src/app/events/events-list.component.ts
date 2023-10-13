import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "ngx-toastr";

// declare let toastr: any;

@Component({
    // selector: 'events-list', // remove this because we are using <router-outlet>
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events" >
                <event-thumbnail (click)="handleThumbnailClick(event.name)"
                  [event]="event">                
                </event-thumbnail>
            </div>            
        </div>                
    </div>
    `
})
export class EventsListComponent implements OnInit {
  events: any[] = [];

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService // for angular 16
  ) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: string) {
    // toastr.success(eventName); // for angular 16
    this.toastrService.success(eventName);

    /*
    this.toastrService.info('info');
    this.toastrService.warning('warning');    
    this.toastrService.error('error');
    this.toastrService.show('show');
    */
  }
}