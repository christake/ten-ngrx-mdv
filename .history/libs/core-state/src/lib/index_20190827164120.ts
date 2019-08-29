import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAnimals from './animals/animals.reducer';
import { Animal, emptyAnimal } from '@ten-ngrx/core-data';


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
