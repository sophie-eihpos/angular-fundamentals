import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionListComponent } from "./session-list.component";
import { DebugElement } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';
import { VoterService } from './voter.service';
import { DurationPipe } from '../shared';
import { CollapsibleWellComponent } from 'src/app/common';
import { UpVoteComponent } from './upvote.component';
import { By } from '@angular/platform-browser';

describe('SessionListComponent Integrated', () => {

    let mockAuthService,
        mockVoterService,
        fixture: ComponentFixture<SessionListComponent>,
        component: SessionListComponent,
        element: HTMLElement,
        debugEl: DebugElement

    beforeEach(() => {

        mockAuthService = { 
            isAuthenticated: () => true,
            currentUser: { userName: 'Joe' }
         };
        mockVoterService = { userHasVoted: () => true };

        TestBed.configureTestingModule({
            declarations: [
                SessionListComponent,
                 DurationPipe,                 
                 CollapsibleWellComponent,
                 UpVoteComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }                
            ]
        });

        fixture = TestBed.createComponent(SessionListComponent); //TODO: research compileComponents
        component = fixture.componentInstance;
        debugEl = fixture.debugElement; // angular aware
        element = fixture.nativeElement;
    });

    describe('initial display', () => {

        it('should have the correct name', () => {
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
            expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
        });
    });
});
