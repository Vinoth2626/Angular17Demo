import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterModel } from '../../model/counterModel';
import { state } from '@angular/animations';

const getcounterstate = createFeatureSelector<CounterModel>('counter');

export const getcounter = createSelector(getcounterstate, (state) => {
  return state.counter;
});

export const getchannelname = createSelector(getcounterstate, (state) => {
  return state.channelname;
});
