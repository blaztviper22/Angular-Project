import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TrainingService } from '../training.service';
import { StopTrainingComponent } from './stop-training/stop-training.component';
import * as fromTraining from '../training.reducer'
import { take } from 'rxjs/operators';




@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {

  
  progress = 0;
  timer:  null | ReturnType<typeof setTimeout> = null;
  
  constructor(
    private dialog: MatDialog, 
    private trainingService: TrainingService, 
    private store: Store<fromTraining.State>
  ) { }

  ngOnInit(): void {
    this.starOrResumeTime();
  }

  starOrResumeTime() {
    this.store.select(fromTraining.getActiveTraining).pipe(take(1)).subscribe(ex => {
      const step = ex.duration / 100 * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 20;
      if (this.progress >= 100) {
        this.trainingService.completeExercise()
        clearInterval(this.timer!);
      }
    }, step)});
  }

  stop() {
    clearInterval(this.timer!);
    const dialogref = this.dialog.open(StopTrainingComponent,{
      data: {
        progress: this.progress
      }
    });

    dialogref.afterClosed().subscribe(result => {
      if(result) {
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.starOrResumeTime();
      }
    })
  };

}
