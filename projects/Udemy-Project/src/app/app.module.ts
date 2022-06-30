import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './materialModule/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AuthService } from './auth/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { UiService } from './ui.service';
import { AuthModule } from './auth/auth/auth.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { SharedModule } from './shared/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './app.reducer'



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideStorage(() => getStorage()),
    SharedModule,
    StoreModule.forRoot(reducer)
  ],
  providers: [
    AuthService, 
    AngularFirestore, 
    AngularFireAuth, 
    UiService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
