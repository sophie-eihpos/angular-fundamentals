import { Injectable } from "@angular/core";
import { EventService } from "./shared/event.service";
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver {

    constructor(private eventService: EventService) {
    }

    // to avoid the component loading partially on the page, for example
    // the title <h1>Upcoming Angular Events</h1> will not show up until all the data is ready
    resolve() {
        return this.eventService.getEvents()
            .pipe(map((events: any) => events)) // map return the observable
    }
}
