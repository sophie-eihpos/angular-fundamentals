import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService, IEvent } from "./shared"; // no need to use '.shared/index'

@Component({
    templateUrl: 'create-event.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
        .error input { background-color: #E3C3C5 }
        .error: ::-webkit-input-placeholder { color: #999 }
        .error: ::-moz-placeholder { color: #999 }
        .error: :-moz-input-placeholder { color: #999 }
        .error: ::ms-input-placeholder { color: #999 }
    `]
})
export class CreateEventComponent implements OnInit {

    // event: IEvent;
    newEvent: IEvent;
    isDirty:boolean = true;

    constructor(private router: Router,
        private eventService: EventService) {
    }

    ngOnInit(): void {
        // this.event = {
        //     id: 888,
        //     name: 'Ng Spectacular',            
        //     date: new Date('8/8/2028'),
        //     time: '10am',
        //     price: 799.99,
        //     location: {
        //         address: '456 Happy St',
        //         city: 'Felicity',
        //         country: 'Angularistan'
        //     },
        //     onlineUrl: 'http://ngSpecuacular.com',
        //     imageUrl: 'http://ngSpectacular.com/logo.png',
        //     sessions: []
        // }
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}
