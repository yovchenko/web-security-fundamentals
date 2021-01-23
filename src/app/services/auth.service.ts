
import {tap, shareReplay, map, filter} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, BehaviorSubject} from "rxjs";
import {User} from "../model/user";

export const ANONYMOUS_USER: User = {
    id: null,
    email: ''
}


@Injectable()
export class AuthService {
    private subject = new BehaviorSubject<User>(null);

    user$: Observable<User> = this.subject.asObservable().pipe(filter(user => Boolean(user)));

    isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user.id));

    isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));

    constructor(private http: HttpClient) {
        http.get<User>('/api/user')
            .subscribe(user => this.subject.next(user ? user : ANONYMOUS_USER))
    }

    signUp(email:string, password:string ) {

        return this.http.post<User>('/api/signup', {email, password})
        .pipe(
            shareReplay(),
            tap(user => this.subject.next(user))
        );

    }

    login(email:string, password:string ) {
        return this.http.post<User>('/api/login', {email, password})
        .pipe(
            shareReplay(),
            tap(user => this.subject.next(user))
        );
    }

    logout(): Observable<any> {
        return this.http.post('/api/logout', null)
        .pipe(
            shareReplay(),
            tap(
                () => this.subject.next(ANONYMOUS_USER),
                error => console.error(error)         
                )
        );
    }

}