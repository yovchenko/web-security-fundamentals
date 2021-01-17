import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

export const ANONYMOUS_USER: User = {
  id: null,
  email: ''
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subject = new BehaviorSubject<User>(ANONYMOUS_USER);

  user$: Observable<User> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean> = 
  this.user$.map(user => Boolean(user.id));
  
  isLoggedOut$: Observable<boolean> = 
  this.isLoggedIn$.map(isLoggedIn => !isLoggedIn);

  constructor(private http: HttpClient) { 

  }

  signUp(email: string, password: string) {
    return this.http.post<User>("/api/signup", {email, password})
          .shareReplay()
          .do(user => this.subject.next(user));
  }
}
