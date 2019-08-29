import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';

import * as fromAnimals from './animals/animals.reducer';
import { Animal, emptyAnimal } from '@ten-ngrx/core-data';

export const reducers: ActionReducerMap<AppState> {
  animals: fromAnimals.animalsReducer,
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
