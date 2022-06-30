import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { TrainingService } from './training.service';
import * as fromTraining from '../traning/training.reducer'


@Component({
  selector: 'app-traning',
  templateUrl: './traning.component.html',
  styleUrls: ['./traning.component.scss']
})
export class TraningComponent implements OnInit {

  ongoingTraining$: Observable<boolean>;
  // exerciseSubscription!: Subscription
  constructor(private trainingService: TrainingService, private store: Store<fromTraining.State>) { }

  ngOnInit(): void {
    // this.exerciseSubscription = this.trainingService.exerciseChanged.subscribe(exercise => {
    //   if(exercise) {
    //     this.ongoingTraining = true;
    //   } else {
    //     this.ongoingTraining = false;
    //   }
    // })

    this.ongoingTraining$ = this.store.select(fromTraining.getIsTraining);
  }

  // ngOnDestroy(): void {
  //   if(this.exerciseSubscription){
  //     this.exerciseSubscription.unsubscribe();
  //   }
  // }
}
