import { Injectable } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ActivatedRouteSnapshot } from "@angular/router";
// import { map } from 'rxjs/operators'; // to avoid warning message, disable strict mode in tsconfig.ts

// // deprecated, so no need to do implements Resolver
// import { Resolve } from "@angular/router";

@Injectable()
export class EventResolver {

    constructor(private eventService: EventService) {
    }

    // to avoid the component loading partially on the page, for example
    // the title <h1>Upcoming Angular Events</h1> will not show up until all the data is ready
    resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEvent(+route.params['id']);

        // comment this out because we are going to use HttpClient api call
        // return this.eventService.getEvents()
        //     .pipe(map((events: any) => events)) // map return the observable
    }
}
