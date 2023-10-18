import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { EventService } from "../shared/event.service";
import { ISession } from "../shared";

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
        this.currentEventId = +this.activatedRoute.snapshot.params['id'];
        this.event = this.eventService.getEvent(this.currentEventId);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        // https://stackoverflow.com/questions/21255138/how-does-the-math-max-apply-work
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));

        session.id = nextId + 1;
        session.eventId =  this.currentEventId;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}
