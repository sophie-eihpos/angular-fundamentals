import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

import { ISession } from "../shared"; // no need '..shared/event.model'
@Injectable()
export class VoterService {
    constructor(private http: HttpClient) {
    }

    deleteVoter(eventId: number, session: ISession, voterName: string): void {
        session.voters = session.voters.filter(voter => voter !== voterName);

        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.delete(url)
            .pipe(catchError(this.handleError('deleteVoter')))
             // since we don't care what it returns back, we will just use subscribe here
             .subscribe();
    }

    addVoter(eventId: number, session: ISession, voterName: string): void {
        session.voters.push(voterName);

        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    
        this.http.post(url, {}, options)
            .pipe(catchError(this.handleError('addVoter')))
            // since we don't care what it returns back, we will just use subscribe here
            .subscribe();
    }

    userHasVoted(session: ISession, voterName: string): boolean {
        return session.voters.some(voter => voter === voterName)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: unknown): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }
}
