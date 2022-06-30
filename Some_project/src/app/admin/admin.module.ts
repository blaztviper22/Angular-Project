import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ModuleModule } from '../Angular_Material/module/module.module';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './layout/side-nav-left/side-nav/side-nav.component';
import { SideNavClosedComponent } from './layout/side-nav-left/side-nav-closed/side-nav-closed.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    SideNavComponent,
    SideNavClosedComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ModuleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
