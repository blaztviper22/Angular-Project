import { Action, createFeatureSelector, createSelector } from "@ngrx/store";
import { TrainingAction, 
    SET_AVAILABLE_TRAININGS, 
    SET_FINISHED_TRAININGS, 
    START_TRAINING, 
    STOP_TRAINING
} from './training.action';
import { Exercise } from "./exercise";
import * as fromRoot from '../app.reducer'


export interface TrainingState {
    availableExercises: Exercise[];
    finishedExercises: Exercise[];
    activeTrainings: Exercise;
};

export interface State extends fromRoot.State{
    training: TrainingState
};



const initialState: TrainingState = {
    availableExercises: [],
    finishedExercises: [],
    activeTrainings: null
};

export function trainingReducer(state = initialState, action: TrainingAction) {
    switch (action.type) {
        case SET_AVAILABLE_TRAININGS: 
          return {
            ...state,
            availableExercises: action.payload
        };
        case SET_FINISHED_TRAININGS:
          return { 
            ...state,
            finishedExercises: action.payload
        };
        case START_TRAINING:
          return { 
            ...state,
            activeTrainings: {...state.availableExercises.find(ex => ex.id === action.payload)}
        };
        case STOP_TRAINING:
          return { 
            ...state,
            activeTrainings: null
        };
        default: {
            return state;
        }
    }
}

export const getTrainingState = createFeatureSelector<TrainingState>('training');     // must be matched at forfeature module in training module

export const getAvailableExercises = createSelector(getTrainingState, (state: TrainingState) =>state.availableExercises); 
export const getFininshedExercises = createSelector(getTrainingState, (state: TrainingState) =>state.finishedExercises);   // helper methods
export const getActiveTraining = createSelector(getTrainingState, (state: TrainingState) =>state.activeTrainings);
export const getIsTraining = createSelector(getTrainingState, (state: TrainingState) =>state.activeTrainings != null);