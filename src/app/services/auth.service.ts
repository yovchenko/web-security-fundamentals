
import {filter} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, BehaviorSubject} from "rxjs";
import {User} from "../model/user";
import * as auth0 from 'auth0-js';
import {Router} from "@angular/router";

export const ANONYMOUS_USER: User = {
    id: undefined,
    email: ''
};

const AUTH_CONFIG = {
    clientID: 'Licu81pbSDkqRoRG0sARgNtbR3GdZuka',
    domain: "dev-abbm6k2d.eu.auth0.com"
};


@Injectable()
export class AuthService {

    auth0 = new auth0.WebAuth({
        clientID: AUTH_CONFIG.clientID,
        domain: AUTH_CONFIG.domain,
        responseType: 'token id_token',
        redirectUri: 'https://localhost:4200/lessons'
    });

    private userSubject = new BehaviorSubject<User>(undefined);

    user$: Observable<User> = this.userSubject.asObservable().pipe(filter(user => !!user));

    constructor(private http: HttpClient, private router: Router) {

    }

    login() {
        this.auth0.authorize();
    }

    signUp() {

    }

    retrieveAuthInfoFromUrl() {
        this.auth0.parseHash({ hash: window.location.hash }, 
            (err: Error, authResult: { idToken: string; })=> {
            if(err){
                console.error("Could not parse the hash", err);
            } else if (authResult && authResult.idToken) {
                window.location.hash = '';
                console.log("Authentication successful, authResult: ", authResult);
                this.setSession(authResult);
                localStorage.setItem('id_token', authResult.idToken);
            }

        });
    }

    logout() {

    }

    public isLoggedIn() {
        return false;
    }

    private setSession(authResult: { idToken: string; }) {
        localStorage.setItem('id_token', authResult.idToken);
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }
}







