import { NgModule } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AuthRoutingModule } from '../auth-routing.module';



@NgModule({
  declarations: [LoginComponent, SignupComponent,],
  imports: [
    ReactiveFormsModule,
    AngularFireAuthModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
