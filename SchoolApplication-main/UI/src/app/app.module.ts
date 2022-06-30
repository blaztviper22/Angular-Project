import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { StudentListComponent } from './Components/master/student-list/student-list.component';
import { SubjectListComponent } from './Components/master/subject-list/subject-list.component';
import { CurriculumListComponent } from './Components/master/curriculum-list/curriculum-list.component';
import { AcadamicRecordComponent } from './Components/records/acadamic-record/acadamic-record.component';
import { PromoteCandidatesComponent } from './Components/records/promote-candidates/promote-candidates.component';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogBoxComponent } from './Components/dialog-box/dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StudentListComponent,
    SubjectListComponent,
    CurriculumListComponent,
    AcadamicRecordComponent,
    PromoteCandidatesComponent,
    DashboardComponent,
    DialogBoxComponent
  ],
  imports: [
    MatButtonModule,
    MatDividerModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents:[DialogBoxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
