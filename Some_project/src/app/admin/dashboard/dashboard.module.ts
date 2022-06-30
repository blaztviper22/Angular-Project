import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { StatComponent } from './stat/stat.component';
import { ModuleModule } from 'src/app/Angular_Material/module/module.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    HomeComponent,
    StatComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ModuleModule,
    FlexLayoutModule
  ]
})
export class DashboardModule { }
