import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";

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
  events: any;

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService, // for angular 16
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // 'events' needs to be matching with resolve:  { events: EventListResolver } in routes.ts
    // using resolver so that the title <h1>Upcoming Angular Events</h1> will not show up until all the data is ready
    this.events = this.activatedRoute.snapshot.data['events'] 

    //// comment this out because we are now using resolver
    // this.eventService.getEvents().subscribe(events => {
    //   this.events = events;
    // });
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