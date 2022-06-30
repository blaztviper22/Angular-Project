import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

const  MaterialComponents = [
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule

]

@NgModule({
  exports: [
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  imports: [
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class AngularMaterialModule { }
