import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { IUser } from "./user.model";
import { catchError, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable()
export class AuthService {
    currentUser: IUser;
    
    constructor(private http: HttpClient) {
    }

    loginUser(userName: string, password: string) {
        let loginInfo = { username: userName, password: password };
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
        
        return this.http.post('/api/login', loginInfo, options)
            .pipe(tap(data => {
                this.currentUser = <IUser>data['user'];
            }))
            .pipe(catchError(err => {
                return of(false);
            }))

        // this.currentUser = {
        //     id: 1,
        //     userName: userName,
        //     firstName: 'Sophie',
        //     lastName: 'Jiang'
        // }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        this.http.get('/api/currentIdentity')
            .pipe(tap(data => {
                if(data instanceof Object) {
                    this.currentUser = <IUser>data;
                }
            }))
            .subscribe();
            
            // // one way to do it is to use subscribe to do it
            // .subscribe(data => {
            //     if(data instanceof Object) {
            //         this.currentUser = <IUser>data;
            //     }
            // })
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
        
        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
    }
}
