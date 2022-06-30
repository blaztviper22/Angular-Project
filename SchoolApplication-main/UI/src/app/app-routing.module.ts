import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { CurriculumListComponent } from './Components/master/curriculum-list/curriculum-list.component';
import { StudentListComponent } from './Components/master/student-list/student-list.component';
import { SubjectListComponent } from './Components/master/subject-list/subject-list.component';
import { AcadamicRecordComponent } from './Components/records/acadamic-record/acadamic-record.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'students', component: StudentListComponent},
  { path: 'subjects', component: SubjectListComponent},
  { path: 'grades', component: AcadamicRecordComponent},
  { path: 'curriculums', component: CurriculumListComponent}  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
