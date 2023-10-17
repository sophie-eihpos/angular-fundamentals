import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ISession } from "../shared";

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    visibleSession: ISession[] = [];
    
    ngOnChanges() {
        if(this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter: string) {
        if(filter === 'all') {
            this.visibleSession = this.sessions;
        } 
        else {
            this.visibleSession = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            });
        };
    }
}