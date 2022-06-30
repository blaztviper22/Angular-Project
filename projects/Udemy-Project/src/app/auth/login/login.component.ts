import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { UiService } from 'src/app/ui.service';
import { AuthService } from '../auth.service';
import * as fromRoot from 'src/app/app.reducer';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm!: FormGroup;
  isLoading$: Observable<boolean>;
  private loadingSubs: Subscription;

  constructor(
    private authService: AuthService,
     private fb: FormBuilder, 
    //private uiService: UiService,
     private store: Store<fromRoot.State>,
    ) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    // this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading =>{
    //   this.isLoading$ = isLoading;
    // })
    this.LoginForm = this.fb.group({
      email: ['',Validators.required],
      password: ['',[Validators.required, Validators.minLength(6)]],
    })
  }

 

  onSubmitted(): void {
    this.authService.login({
      email: this.LoginForm.value.email,
      password: this.LoginForm.value.password
    });
  }

  // ngOnDestroy(): void {
  //   if(this.loadingSubs) {
  //     this.loadingSubs.unsubscribe();
  //   }
  // }
}
