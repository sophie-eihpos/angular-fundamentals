import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SessionListComponent } from "./session-list.component";
import { DebugElement } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';


describe('SessionListComponent', () => {

    let mockAuthService,
        mockVoterService,
        fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SessionListComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ]
        });

        fixture = TestBed.createComponent(SessionListComponent); //TODO: research compileComponents
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe('initial display', () => {


    });

});