import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

const MaterialComponents: any[] = [
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatToolbarModule
];

@NgModule({
  
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class AngularMaterialModule { }
