import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { LoginPageComponent } from './Component/login-page/login-page.component';
import { IputSampleComponent } from './Component/iput-sample/iput-sample.component';
import { ReactiveFormSampleComponent } from './Component/reactive-form-sample/reactive-form-sample.component';
import { NgIfComponentSampleComponent } from './Component/ng-if-component-sample/ng-if-component-sample.component';
import { ReactiveTestComponent } from './Component/reactive-test/reactive-test.component';
import { CockpitComponent } from './Component/cockpit/cockpit.component';
import { ServerElementComponent } from './Component/server-element/server-element.component';
import { GameControlComponent } from './Component/game-control/game-control.component';
import { OddComponent } from './Component/odd/odd.component';
import { EvenComponent } from './Component/even/even.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    IputSampleComponent,
    ReactiveFormSampleComponent,
    NgIfComponentSampleComponent,
    ReactiveTestComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NgBootstrapModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
