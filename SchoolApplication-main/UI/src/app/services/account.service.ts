import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public isLoggedIn:boolean =true;
  public loggedInUserName = "testUser";
  constructor() { }

}
