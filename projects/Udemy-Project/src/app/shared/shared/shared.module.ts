import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from 'src/app/materialModule/angular-material/angular-material.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
  ]
})
export class SharedModule { }
