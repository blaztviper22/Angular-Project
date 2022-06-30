import { NgModule } from '@angular/core';
import { CurrentTrainingComponent } from '../current-training/current-training.component';
import { NewTrainingComponent } from '../new-training/new-training.component';
import { PastTrainingsComponent } from '../past-trainings/past-trainings.component';
import { TraningComponent } from '../traning.component';
import { StopTrainingComponent } from '../current-training/stop-training/stop-training.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { TrainingService } from '../training.service';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { TrainingRoutingModule } from '../training-routing.module';
import { StoreModule } from '@ngrx/store';
import { trainingReducer } from '../training.reducer';



@NgModule({
  declarations: [
    TraningComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    StopTrainingComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideStorage(() => getStorage()),
    TrainingRoutingModule,
    StoreModule.forFeature('training', trainingReducer)
  ],
  entryComponents: [StopTrainingComponent,TrainingService]
})
export class TraningModuleModule { }
