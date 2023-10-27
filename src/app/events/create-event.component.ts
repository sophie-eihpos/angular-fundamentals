import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, NgModelGroup } from "@angular/forms";

import { EventService, IEvent } from "./shared"; // no need to use '.shared/index'

@Component({
    templateUrl: 'create-event.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
        .error input { background-color: #E3C3C5 }
        /* .error: ::-webkit-input-placeholder { color: #999 }
        .error: ::-moz-placeholder { color: #999 }
        .error: :-moz-input-placeholder { color: #999 }
        .error: :-ms-input-placeholder { color: #999 } */
    `]
})
export class CreateEventComponent implements OnInit {

    // event: IEvent;
    newEvent: IEvent;
    isDirty:boolean = true;
    
    newEventForm: FormGroup;
    location: NgModelGroup;
    address: FormControl;
    
    constructor(private router: Router,
        private eventService: EventService) {
    }
    
    ngOnInit(): void {

        // // we could use FormBuilder after inject it to the constructor
        // this.newEventForm = this.formBuilder.group({
        //     address: ''
        // })

        this.address = new FormControl();
        this.newEventForm = new FormGroup({
            address: this.address
        })
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe(() => {
            this.isDirty = false;
            this.router.navigate(['/events']);
        });
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}
