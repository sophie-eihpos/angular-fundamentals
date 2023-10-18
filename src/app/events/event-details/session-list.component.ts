import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../shared";

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
