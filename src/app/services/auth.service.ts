
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
        this.auth0.parseHash({ hash: window.location.hash }, function(err, authResult) {
            if(err){
                console.log("Could not parse the hash", err);
                return;
            }

            console.log("Authentication successful, authResult: ", authResult);
        });
    }

    logout() {

    }

    public isLoggedIn() {
        return false;
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

}







