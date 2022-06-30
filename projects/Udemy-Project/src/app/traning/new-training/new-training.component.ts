import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from '../exercise';
import { TrainingService } from '../training.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UiService } from 'src/app/ui.service';
import * as fromTraining from '../training.reducer'
import * as fromRoot from '../../app.reducer'
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit{
  //@Output() trainingStart = new EventEmitter<void>();//
  exercises$: Observable<Exercise[]>;
  isLoading$: Observable<boolean>;
  // private exerciseSubscription: Subscription;
  // private loadingSubscription: Subscription;

  constructor(
    private trainingService: TrainingService, 
    private uiService: UiService, 
    private store: Store<fromTraining.State>
  ) { }

  ngOnInit(): void {
    // this.loadingSubscription = this.uiService.loadingStateChanged.subscribe(
    //   isLoading => {
    //     this.isLoading = isLoading;
    //   }
    // );
    this.isLoading$ = this.store.select(fromRoot.getIsLoading)
    // this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(
    //   exercises => { 
    //     this.exercises = exercises
    //   }
    // );
    this.exercises$ = this.store.select(fromTraining.getAvailableExercises);
   this.fetchExercises();
  }

  fetchExercises() {
    this.trainingService.FetchavailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

  // ngOnDestroy() {
  //   if(this.exerciseSubscription) {
  //     this.exerciseSubscription.unsubscribe();
  //   }
  //   // if(this.loadingSubscription) {
  //   //   this.loadingSubscription.unsubscribe();
  //   // }
  // };
}
