import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { TrainingService } from '../traning/training.service';
import { UiService } from '../ui.service';
import { AuthData } from './auth-data.model';
import * as fromRoot from '../app.reducer';
import * as UI from '../shared/shared/ui.actions';
import * as Auth from './auth.action'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // authChange = new Subject<boolean>();
  // private isAuthenticated = false;

  constructor(private router: Router, 
    private afauth: AngularFireAuth, 
    private trainingService: TrainingService,
    private uiService: UiService,
    private store: Store<fromRoot.State>
  ) { }

  initAuthListener() {
    this.afauth.authState.subscribe(user => {
      if (user) {
        // this.isAuthenticated = true;
        // this.authChange.next(true);
        this.store.dispatch(new Auth.SetAunthenticated());
        this.router.navigate(['/training']);
      } else {
        this.trainingService.cancelSubscriptions();
        // this.authChange.next(false);
        this.store.dispatch(new Auth.SetUnauthenticated());
        this.router.navigate(['']);
        // this.isAuthenticated = false;
      }
    })
  }

  registerUser(authData: AuthData) {
    // this.uiService.loadingStateChanged.next(true);
    this.store.dispatch(new UI.StartLoading());
    this.afauth.createUserWithEmailAndPassword(
      authData.email, 
      authData.password
    ).then(result => {
      // this.uiService.loadingStateChanged.next(false);
      this.store.dispatch(new UI.StopLoading());
    }).catch(err => {
      // this.uiService.loadingStateChanged.next(false);
      this.store.dispatch(new UI.StopLoading());
      this.uiService.showSnackbar(err.message, null, 3000);
    });
    
  };

  login(authData: AuthData) {
    // this.uiService.loadingStateChanged.next(true);
    this.store.dispatch(new UI.StartLoading());
    this.afauth.signInWithEmailAndPassword(
      authData.email, 
      authData.password
    ).then(result => {
      // this.uiService.loadingStateChanged.next(false);
      this.store.dispatch(new UI.StopLoading());
    }).catch(err => {
      // this.uiService.loadingStateChanged.next(false);
      this.store.dispatch(new UI.StopLoading());
      this.uiService.showSnackbar(err.message, null, 3000);
    });
    
  };

  logout() {
    this.afauth.signOut();
  };


  // isAuth() {
  //   return this.isAuthenticated;
  // };

  // private authSuccessfully() {
  // }
}
