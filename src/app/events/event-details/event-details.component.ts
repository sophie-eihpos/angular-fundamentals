import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { EventService } from "../shared/event.service";
import { IEvent, ISession } from "../shared";

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
        a { cursor: pointer }
    `]
})
export class EventDetailsComponent implements OnInit {
    event: any = {};
    addMode: boolean = false;
    filterBy: string = 'all';
    sortBy: string = 'votes';
    currentEventId: number;

    constructor(private eventService: EventService,
        private activatedRoute: ActivatedRoute) {        
    }

    ngOnInit(): void {
        this.activatedRoute.data.forEach((data) => {
            // this is how to consume the event-resolver.service
            this.event = data['event'];
            this.addMode = false;
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        // https://stackoverflow.com/questions/21255138/how-does-the-math-max-apply-work
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));

        session.id = nextId + 1;
        session.eventId =  this.event.id;
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe();
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}
