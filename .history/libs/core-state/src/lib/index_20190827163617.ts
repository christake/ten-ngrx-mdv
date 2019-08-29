import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAnimals from './animals/animals.reducer';
import { Animal, emptyAnimal } from '@ten-ngrx/core-data';


// Animal Selectors
export const selectAnimalsState = createFeatureSelector<fromAnimals.AnimalState>('animals');

export const selectAnimalIds = createSelector(
  selectAnimalsState,
  selectAnimalIds
);

export const selectAnimalEntities = createSelector(
  selectAnimalsState,
  selectAnimalEntities
);

export const selectAllAnimals = createSelector(
  selectAnimalsState,
  selectAllAnimals
);

export const selectCurrentAnimalId = createSelector(
  selectAnimalsState,
  getSelectedAnimalId
);

export const selectCurrentAnimal = createSelector(
  selectAnimalEntities,
  selectCurrentAnimalId,
  (AnimalEntities, AnimalId) => {
    return AnimalId ? AnimalEntities[AnimalId] : emptyAnimal;
  }
);
