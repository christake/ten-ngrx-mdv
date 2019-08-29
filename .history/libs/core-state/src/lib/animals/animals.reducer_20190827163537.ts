import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Animal } from '@ten-ngrx/core-data';
import { AnimalActions, AnimalsActionTypes } from './animals.actions';

export interface AnimalState extends EntityState<Animal> {
  selectedAnimalId: string | null;
}

export const adapter: EntityAdapter<Animal> = createEntityAdapter<Animal>();
export const initialState: AnimalState = adapter.getInitialState({
  selectedAnimalId: null
});

export function animalReducer(state: AnimalState = initialState, action: AnimalActions): AnimalState {
  switch (action.type) {
    case AnimalsActionTypes.ANIMAL_SELECTED: {
      return Object.assign({}, state, { selectedAnimalId: action.payload });
    }
    case AnimalsActionTypes.ANIMAL_LOADED: {
return adapter.addAll(action.payload, state);
    }
    case AnimalsActionTypes.ANIMAL_ADDED: {
      return adapter.addOne(action.payload, state);
    }
    case AnimalsActionTypes.ANIMAL_UPDATED: {
      return adapter.upsertOne(action.payload, state);
    }
    case AnimalsActionTypes.ANIMAL_DELETED: {
      return adapter.removeOne(action.payload.id, state);
    }
    default:
      return state;
  }
}

export const getSelectedAnimalId = (state: AnimalState) => state.selectedAnimalId;
// get Selectors
const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
export const selectAnimalIds = selectIds;
export const selectAnimalEntities = selectEntities;
export const selectAllAnimals = selectAll;
export const selectAnimalTotal = selectTotal;
