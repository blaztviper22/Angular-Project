// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, map, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {
//   private currentUserSubject: BehaviorSubject<any>;
//   public currentUser: Observable<any>;

//   constructor(private http: HttpClient
//   ) {
//     this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
//     this.currentUser = this.currentUserSubject.asObservable();
//   }
//   //   public get(url: string, options?: any) { 
//   //   return this.http.get(url, options); 
//   //   } 
//   //   public get currentUserValue() {
//   //     return this.currentUserSubject.value;
//   // }
//   public get currentUserValue() {
//     return this.currentUserSubject.value;
//   }

//   login(username: any, password: any) {
//     return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
//       .pipe(map(user => {
//         // store user details and jwt token in local storage to keep user logged in between page refreshes
//         localStorage.setItem('currentUser', JSON.stringify(user));
//         this.currentUserSubject.next(user);
//         return user;
//       }));
//   }

//   logout() {
//     // remove user from local storage and set current user to null
//     localStorage.removeItem('currentUser');
//     this.currentUserSubject.next(null);
//   }
//   // public post(url: string, data: any, options?: any) { 
//   // return this.http.post(url, data, options); 
//   // } 
//   // public put(url: string, data: any, options?: any) { 
//   // return this.http.put(url, data, options); 
//   // } 
//   // public delete(url: string, options?: any) { 
//   // return this.http.delete(url, options); 
//   // } 
// }
