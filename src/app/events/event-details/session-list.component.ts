import { Component, Input, OnChanges } from "@angular/core";

import { ISession } from "../shared";
import { AuthService } from "../../user/auth.service";
import { VoterService } from "./voter.service";

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges() {
        if(this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' 
                ? this.visibleSessions.sort(sortByNameAsc) 
                : this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    constructor(private authService: AuthService, private voterService: VoterService) {
    }

    userHasVoted(session: ISession): boolean {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
    }

    toggleVote(session: ISession) {
        if(this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.authService.currentUser.userName);
        }
        else {
            this.voterService.addVoter(session, this.authService.currentUser.userName);
        }

        if(this.sortBy === 'votes') {
            this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    filterSessions(filter: string) {
        if(filter === 'all') {
            this.visibleSessions = this.sessions;
        } 
        else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            });
        };
    }
}

function sortByNameAsc(a: ISession, b: ISession): number {
    if(a.name > b.name) return 1;
    else if(a.name === b.name) return 0;
    else return -1;
}

function sortByVotesDesc(a: ISession, b: ISession): number {
    return b.voters.length - a.voters.length;
}
