import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudenLoginComponent } from './Components/studen-login/studen-login.component';
import { TeacherLoginComponent } from './Components/teacher-login/teacher-login.component';
import { SuperAdminLoginComponent } from './Components/super-admin-login/super-admin-login.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { StudenDashboardComponent } from './Components/studen-dashboard/studen-dashboard.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudenLoginComponent,
    TeacherLoginComponent,
    SuperAdminLoginComponent,
    StudenDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
