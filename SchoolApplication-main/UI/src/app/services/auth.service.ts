// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, BehaviorSubject, map } from 'rxjs';


// @Injectable({providedIn: 'root'})
// export class AuthService {
//   public isLoggedIn$: BehaviorSubject<boolean>;
//   private currentUserSubject: BehaviorSubject<any>;
//   public currentUser: Observable<any>;

//   constructor(private http: HttpClient) {
//     const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
//     this.isLoggedIn$ = new BehaviorSubject(isLoggedIn);
//     this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
//     this.currentUser = this.currentUserSubject.asObservable();
//   }

//   login(username: any, password: any) {
//     // logic
//     this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
//       .pipe(map(user => {
//         // store user details and jwt token in local storage to keep user logged in between page refreshes
//         localStorage.setItem('currentUser', JSON.stringify(user));
//         this.currentUserSubject.next(user);
//         return user;
//       }));
//     localStorage.setItem('loggedIn', 'true');
//     this.isLoggedIn$.next(true);
//   }

//   logout() {
//     // logic
//     localStorage.setItem('loggedIn', 'false');
//     this.isLoggedIn$.next(false);
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
}