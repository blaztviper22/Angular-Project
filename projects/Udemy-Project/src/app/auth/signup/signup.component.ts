import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UiService } from 'src/app/ui.service';
import { AuthService } from '../auth.service';
import * as fromRoot from '../../app.reducer';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  maxDate: any;
  isLoading$: Observable<boolean>;
  // private loadingSubs : Subscription;

  constructor(
    private authService: AuthService, 
    private uiService: UiService, 
    private router: Router,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit(): void {
    // this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading =>{
    //   this.isLoading = isLoading;
    // })
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getFullYear() - 18)
  }

  onSubmit(form: NgForm): void {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
    this.router.navigate(['/login']);
  }

  // ngOnDestroy(): void {
  //   if (this.loadingSubs) {
  //     this.loadingSubs.unsubscribe();
  //   }
    
  // }
}
