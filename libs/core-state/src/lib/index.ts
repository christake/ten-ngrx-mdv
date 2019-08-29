import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';

import * as fromAnimals from './animals/animals.reducer';
import { emptyAnimal } from '@ten-ngrx/core-data';

export interface AppState {
  animals: fromAnimals.AnimalState
}

export const reducers: ActionReducerMap<AppState> = {
  animals: fromAnimals.animalsReducer,
}

export const defaultState: AppState = {
  animals: { ids: [] } as fromAnimals.AnimalState
}

// Animal Selectors
export const selectAnimalsState = createFeatureSelector<fromAnimals.AnimalState>('animals');

export const selectAnimalIds = createSelector(
  selectAnimalsState,
  fromAnimals.selectAnimalIds
);

export const selectAnimalEntities = createSelector(
  selectAnimalsState,
  fromAnimals.selectAnimalEntities
);

export const selectAllAnimals = createSelector(
  selectAnimalsState,
  fromAnimals.selectAllAnimals
);

export const selectCurrentAnimalId = createSelector(
  selectAnimalsState,
  fromAnimals.getSelectedAnimalId
);

export const selectCurrentAnimal = createSelector(
  selectAnimalEntities,
  selectCurrentAnimalId,
  (AnimalEntities, AnimalId) => {
    return AnimalId ? AnimalEntities[AnimalId] : emptyAnimal;
  }
);
