import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ISession, restrictedWords } from "../shared"; // no need to do '../shared/index'

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
        .error input { background-color: #E3C3C5 }
        /* .error: ::-webkit-input-placeholder { color: #999 }
        .error: ::-moz-placeholder { color: #999 }
        .error: :-moz-input-placeholder { color: #999 }
        .error: :-ms-input-placeholder { color: #999 } */
        .error select { background-color: #E3C3C5 }
        .error textarea { background-color: #E3C3C5 }
    `]
})
export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelAddSession = new EventEmitter();

    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    ngOnInit(): void {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [
            Validators.required,
            Validators.maxLength(40),
            restrictedWords(['foo', 'bar'])
        ]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveSession(formValues: ISession) {
        const session: ISession = {
            id: undefined,
            eventId: undefined,
            name: formValues.name,
            duration: +formValues.duration, // convert it to a number
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: []
        }
        // console.log(formValues);

        this.saveNewSession.emit(session);
    }

    cancel() {
        this.cancelAddSession.emit();
    }
}
