import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Exercise } from '../exercise';
import { TrainingService } from '../training.service';
import * as fromTraining from '../training.reducer'



@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.scss']
})
export class PastTrainingsComponent implements OnInit, AfterViewInit{

  displayedColumns = [
    'date',
    'name',
    'duration',
    'calories',
    'state'
  ];
  dataSource = new MatTableDataSource<Exercise>();
  // private exChangedSubscription: Subscription;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private trainingService: TrainingService, 
    private store: Store<fromTraining.State>
  ) { }

  ngOnInit(): void {
    this.store.select(fromTraining.getFininshedExercises).subscribe(
      (exercise: Exercise[])=>{
        this.dataSource.data = exercise;
      }
    );
    this.trainingService.fetchCompleteOrCancelledExercise();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // ngOnDestroy(): void {
  //   if(this.exChangedSubscription){
  //     this.exChangedSubscription.unsubscribe();
  //   }
    
  // }
}
