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

                // angular 16 won't error out without DurationPip in declarations
                // DurationPipe 
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

        it('should have the correct title', () => {
            // arrange
            component.sessions = [
                { 
                    name: 'Session 1',
                    id: 3,
                    eventId: 1,
                    presenter: 'Joe',
                    duration: 1,
                    level: 'beginner',
                    abstract: 'abstract',
                    voters: ['john', 'bob']
                }
            ];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;
            component.ngOnChanges();

            // act
            fixture.detectChanges();

            // assert

        });

    });

});