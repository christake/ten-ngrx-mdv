import { Injectable } from '@angular/core';

import { Store, ActionsSubject, select } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as AnimalsActions from './animals.actions';
import { AnimalsActionTypes } from './animals.actions';
import { AnimalState } from './animals.reducer';
import { selectCurrentAnimal, selectAllAnimals } from '..';
import { Animal } from '@ten-ngrx/core-data';

@Injectable({ providedIn: 'root' })
export class AnimalsFacade {
  allAnimals$ = this.store.pipe(select(selectAllAnimals));
  currentAnimal$ = this.store.pipe(select(selectCurrentAnimal));

  mutations$ = this.actions$.pipe(
    filter(action =>
      action.type === AnimalsActionTypes.ADD_ANIMAL
      || action.type === AnimalsActionTypes.UPDATE_ANIMAL
      || action.type === AnimalsActionTypes.DELETE_ANIMAL
    )
  );

  constructor(
    private store: Store<AnimalState>,
    private actions$: ActionsSubject
  ) { }

  selectAnimal(animalId: string) {
    this.store.dispatch(new AnimalsActions.Animals(animalId));
  }

  loadAnimals() {
    this.store.dispatch(new AnimalsActions.LoadAnimals());
  }

  createAnimal(animal: Animal) {
    this.store.dispatch(new AnimalsActions.AddAnimal(animal));
  }

  updateAnimal(animal: Animal) {
    this.store.dispatch(new AnimalsActions.UpdateAnimal(animal));
  }

  deleteAnimal(animal: Animal) {
    this.store.dispatch(new AnimalsActions.DeleteAnimal(animal));
  }
}
