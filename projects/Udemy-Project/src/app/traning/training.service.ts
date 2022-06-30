import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Exercise } from './exercise';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, take } from 'rxjs/operators';
import { UiService } from '../ui.service';
import * as UI from '../shared/shared/ui.actions';
import * as fromRoot from '../app.reducer';
import { Store } from '@ngrx/store';
import * as fromTraining from '../traning/training.reducer';
import * as Training from '../traning/training.action';



@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  // exerciseChanged = new Subject<Exercise|null>();
  // exercisesChanged = new Subject<Exercise[]>();
  // finishedExercisesChanged = new Subject<Exercise[]>();
  // private availableExercises: Exercise[] = [];
  // private runningExercise!: Exercise | null;
  private fbSubs: Subscription[] = [];



  constructor(
    private db: AngularFirestore, 
    private uiService: UiService, 
    private store: Store<fromTraining.State>
  ) { }

  FetchavailableExercises() {
    // this.uiService.loadingStateChanged.next(true);
    this.store.dispatch(new UI.StartLoading());
    this.fbSubs.push(this.db
    .collection('availableExercise')
    .snapshotChanges()
    .pipe(map(docArray =>{
      return docArray.map((doc: any) =>{
        return {
          id: doc.payload.doc.id,
          name: doc.payload.doc.data().name,
          duration: doc.payload.doc.data().duration,
          calories: doc.payload.doc.data().calories,    //see snapshot uses in agnular
          date: doc.payload.doc.data().date
        };
      });
    })).subscribe((exercises: Exercise[]) =>{
      // this.uiService.loadingStateChanged.next(false);
      this.store.dispatch(new UI.StopLoading());
      // this.availableExercises = exercises;
      // this.exercisesChanged.next([...this.availableExercises])
      this.store.dispatch(new Training.SetAvailableTrainings(exercises));
    }, error => {
      // this.uiService.loadingStateChanged.next(false);
      this.store.dispatch(new UI.StopLoading());
      this.uiService.showSnackbar('Fetching Exercise failed, please try again later.', null, 3000);
      // this.exercisesChanged.next(null);
    }));
  }

  startExercise(selectedId: string) {
    // this.runningExercise = this.availableExercises.find(
    //   ex => ex.id === selectedId
    // )!;

    // this.exerciseChanged.next({ ...this.runningExercise});
    this.store.dispatch(new Training.StartTrainings(selectedId));
  }

  completeExercise() {
    this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex => {
      this.addDataToDatabase({
        ...ex, 
        date: new Date(), 
        state: 'completed'
      });
    });
    // this.runningExercise = null;
    // this.exerciseChanged.next(null);
    this.store.dispatch(new Training.StopTrainings())
  }
  
  cancelExercise(progress: number){
    this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex => {
      this.addDataToDatabase({
        ...ex, 
        duration: ex.duration * (progress / 100),
        calories: ex.calories * (progress / 100),
        date: new Date(), 
        state: 'cancelled'
      });
      this.store.dispatch(new Training.StopTrainings());
    });
    // this.addDataToDatabase({
    //   ... this.runningExercise!,
    //   duration: this.runningExercise!.duration * (progress / 100),
    //   calories: this.runningExercise!.calories * (progress / 100),
    //   date: new Date(), 
    //   state: 'cancelled'
    // });

    // this.runningExercise = null;
    // this.exerciseChanged.next(null);
    // this.store.dispatch(new Training.StopTrainings());
  }

  // getRunningExercise() {
  //   return {...this.runningExercise!};
  // }

  fetchCompleteOrCancelledExercise() {
    this.fbSubs.push(this.db
    .collection('finishedExercise')
    .valueChanges()
    .subscribe((exercise: Exercise[]) => {
      // this.finishedExercisesChanged.next(exercise);
      this.store.dispatch(new Training.SetFinishedTrainings(exercise));
    }));
  }

  cancelSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe);
  }

  private addDataToDatabase(exercises: Exercise) {
    this.db.collection('finishedExercise').add(exercises); // note: this will return promise as expected
  }
}
