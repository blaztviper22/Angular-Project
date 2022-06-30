import { Action } from "@ngrx/store";
import { Exercise } from "./exercise";

export const SET_AVAILABLE_TRAININGS = '[Auth] Set Available Training';
export const SET_FINISHED_TRAININGS = '[Auth] Set Finished Training';
export const START_TRAINING = '[Training] Start Training';
export const STOP_TRAINING = '[Training] Stop Training';



export class SetAvailableTrainings implements Action {
    readonly type = SET_AVAILABLE_TRAININGS;

    constructor(public payload: Exercise[]){}
}

export class SetFinishedTrainings implements Action {
    readonly type = SET_FINISHED_TRAININGS;

    constructor(public payload: Exercise[]){}
}

export class StartTrainings implements Action {
    readonly type = START_TRAINING;

    constructor(public payload: string){}
}

export class StopTrainings implements Action {
    readonly type = STOP_TRAINING;
}


export type TrainingAction = 
 | SetAvailableTrainings  
 | SetFinishedTrainings  
 | StartTrainings 
 | StopTrainings;